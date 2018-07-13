<template lang="pug">
  .wrap
    .container
      .progress-bar
        ul.progress-state
          template(v-for="(item, index) in links" v-if="index < links.length - 1")
            li
              router-link(:to="item.path", :key="index", :class="getLinkClasses(index)")
      .main
        router-view(@emit-update-and-go-next="updateAndGoNext")
</template>
<script>
export default {
  data: function() {
    return {
      links: [
        {
          path: "/",
          desc: "create-account",
          done: false
        },
        {
          path: "/general-info",
          desc: "general-info",
          done: false
        },
        {
          path: "/update-profile-picture",
          desc: "update-profile-picture",
          done: false
        },
        {
          path: "/payment-method",
          desc: "payment-method",
          done: false
        },
        {
          path: "/congratulations",
          desc: "congratulations",
          done: false
        }
      ]
    };
  },
  methods: {
    findIndexByPath(path) {
      return this.links.findIndex((value, index, arr) => value.path === path);
    },
    updateAndGoNext(callerPath) {
      const index = this.findIndexByPath(callerPath);
      if (index < 0) {
        throw new Error(`Cannot find path(${callerPath}) in links`);
      }
      this.links[index].done = true;

      this.navigator.replaceTo(this.links[index + 1].path);
    },
    getLinkClasses(index) {
      const item = this.links[index];

      return item.done
        ? "fas fa-check-circle active"
        : item.path === this.$router.currentRoute.path
          ? "far fa-dot-circle active"
          : "far fa-circle";
    },
    goNextValidPage(preIndex) {
      const next = this.links.find(
        (value, index) => index > preIndex && !value.done
      );
      if (next) {
        this.navigator.replaceTo(next.path);
        return;
      }
      console.log(`Cannot find next valid page by preIndex=${preIndex}`);
    },
    goPreValidPage(nextIndex) {
      // if (nextIndex === 0) {
      //   return;
      // }

      for(let i = nextIndex - 1; i > -1; i--) {
        const found = this.links[i];
        if(found && !found.done) {
          this.navigator.replaceTo(found.path);
          return;
        }
      }

    }
  },
  watch: {
    // Prevant change path by user
    $route: function(route) {
      const index = this.findIndexByPath(route.path);
      if (index < 0) {
        throw new Error(`Cannot find path(${route.path}) in links`);
      }

      if (this.links[index].done) {
        this.goNextValidPage(index);
        return;
      }
      this.goPreValidPage(index);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/partials/predefined";

.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 54px;
}
.container {
  border-top: 8px solid $color-blue;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  height: 100%;
  width: 460px;

  .progress-bar {
    height: 100px;
    position: relative;
    @include flex-box(center, center);

    $progress-state-width: 240px;
    .progress-state {
      height: 30px;
      width: $progress-state-width;
      @include flex-box(space-between, center, row, nowrap);

      li {
        position: relative;

        a,
        a:active,
        a:hover,
        a:link,
        a:visited {
          color: $color-blue-lighter;
        }

        a {
          text-decoration: none;
          font-size: 16px;

          &.active {
            color: $color-blue;
          }
        }

        &:not(:first-child) a {
          &::after {
            border-top: 2px solid $color-blue-lighter;
            content: "";
            position: absolute;
            top: calc(50% - 1px);
            right: 16px;
            width: $progress-state-width / 4 - 1px;
            z-index: -1;
          }

          &.active::after {
            border-color: $color-blue;
          }
        }
      }
    }
  }
}
</style>
