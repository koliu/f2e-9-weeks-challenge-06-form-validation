<template lang="pug">
  .wrap
    .container
      .process-bar
        ul.process-state
          li(v-for="(item, index) in links")
            router-link(:to="item.path", :key="index", :class="getLinkClasses(index)")
      .main
        router-view
</template>
<script>
export default {
  data: function() {
    return {
      links: [
        {
          path: "/",
          desc: "create-account",
          done: true
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
          done: true
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
    getLinkClasses(index) {
      const item = this.links[index];

      return item.done
        ? "fas fa-check-circle active"
        : item.path === this.$router.currentRoute.path
          ? "far fa-dot-circle active"
          : "far fa-circle";

      // if (item.done) {
      //   return "fas fa-check-circle active";
      // }

      // if (item.path === this.$router.currentRoute.path) {
      //   return "far fa-dot-circle active";
      // }

      // return "far fa-circle";
    }
  },
  watch: {
    links() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
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

  .process-bar {
    height: 100px;
    position: relative;
    @include flex-box(center, center);

    $process-state-width: 240px;
    .process-state {
      height: 30px;
      width: $process-state-width;
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
            width: $process-state-width / 5 - 6px;
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
