<template lang="pug">
  div
    .wrap(:class="getWarnClasses()", v-if="propWarnDirection==='left'")
      i.warn-message(v-if="isShowWarn()", v-text="propWarnMessage").ft-label

    input(:id="propId", :type="propType", v-model="value", @focus="focus = true", @blur="focus = false", :placeholder="propPlaceholder", :class="getClasses()").input.ft-form
    label(:for="propId", v-if="isShowWarn()", :class="propWarnSignClasses").warn-sign

    .wrap(:class="getWarnClasses()", v-if="propWarnDirection==='right'")
      i.warn-message(v-if="isShowWarn()", v-text="propWarnMessage").ft-label
</template>
<script>
export default {
  props: {
    propId: {
      type: String
    },
    propValue: {
      default: "",
      type: String
    },
    propType: {
      default: "text",
      type: String
    },
    propValid: {
      default: false,
      type: Boolean
    },
    propPlaceholder: {
      default: "●●●●●●●●",
      type: String
    },
    propWarnMessage: {
      default: "",
      type: String
    },
    propWarnSignText: {
      default: "",
      type: String
    },
    propWarnSignClasses: {
      default: "fas fa-exclamation-triangle",
      type: String
    },
    propWarnDirection: {
      default: "right",
      type: String
    },
    propUpdateData: {}
  },
  data() {
    return {
      value: "",
      focus: false
    };
  },
  watch: {
    propValue() {
      this.value = this.propValue;
    },
    value() {
      // console.log("input", "watch", "value", this.propId, this.value);
      this.$emit("propUpdateData", this.propId, this.value);
    }
  },
  methods: {
    isShowWarn() {
      // console.log(
      //   "isShowWarn",
      //   `value=${this.value}`,
      //   `propValid=${this.propValid}`,
      //   this.value !== "" && !this.propValid
      // );
      return this.value !== "" && !this.propValid;
    },
    getClasses() {
      let result = "";
      if (this.focus) {
        result += "focus ";
      }

      result += this.propId + " ";

      if (this.isShowWarn()) {
        result += "warn";
      }

      // console.log("input", "getClasses", result);
      return result;
    },
    getWarnClasses() {
      return `warn-${this.propWarnDirection}`;
    }
  },
  mounted() {
    // console.log(
    //   `propId=${this.propId}`,
    //   `propValue=${this.propValue}`,
    //   `propType=${this.propType}`,
    //   `propPlaceholder=${this.propPlaceholder}`,
    //   `propValid=${this.propValid}`,
    //   `propWarnMessage=${this.propWarnMessage}`,
    //   `propWarnSignClasses=${this.propWarnSignClasses}`
    // );
    this.value = this.propValue;
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/pages";
div {
  position: relative;
  @include flex-box(flex-start, center, row, nowrap);

  .wrap {
    display: inline-block;
    position: absolute;
    height: 100%;
    line-height: 100%;
    z-index: 2;

    i {
      position: absolute;

      &.warn-message {
        background-color: $color-yellow;
        border-radius: 4px;
        color: $color-white;
        display: block;
        padding: 6px 8px;
        white-space: nowrap;
        z-index: 2;

        &::before {
          content: "";
          border: 6px solid transparent;
          position: absolute;
          width: 4px;
          z-index: 222;
        }
      }
    }

    &.warn-right {
      right: -14px;

      i.warn-message {
        top: calc(25% - 3px);

        &::before {
          border-right-color: $color-yellow;
          left: -16px;
          top: 10px;
        }
      }
    }

    &.warn-left {
      left: -14px;

      i.warn-message {
        top: calc(25% - 3px);
        right: 0;

        &::before {
          border-left-color: $color-yellow;
          right: -16px;
          top: 10px;
        }
      }
    }
  }

  label.warn-sign {
    color: $color-yellow;
    font-size: 24px;
    position: absolute;
    right: 24px;
    top: 12px;
    z-index: 2;
  }
}
</style>
