<template lang="pug">
  .section.ft-form
    .header
      .title.ft-title Update Profile Picture
      .sub-title.ft-sub-title We wanna know you more!
    .selector
      input(type="file", name="photos", accept=".jpg, .png", multiple).photos
      .info
        .image.gray.fas.fa-images
        .desc.gray
          i UPLOAD UP TO 3 PHOTOS
          i.ft-normal MAX SIZE: 150*150px
    .chose
    .submit(@click="updateParentAndGoNext") SUBMIT &amp; NEXT
</template>
<script>
export default {
  methods: {
    updateParentAndGoNext() {
      this.$emit('emit-update-and-go-next', this.$route.path);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
@import "../css/partials/predefined";

.section {
  .selector {
    border: 2px solid $color-black;
    border-radius: 8px;
    box-sizing: border-box;
    height: 140px;
    margin-top: 24px;
    position: relative;
    width: 460px;
    .photos {
      border: 1px dotted red;
      cursor: pointer;
      height: 100%;
      position: absolute;
      opacity: 0;
      width: 100%;

      @include flex-box(center, center);
    }

    .info {
      height: 100%;
      width: 100%;
      @include flex-box(center, center);

      .image {
        font-size: 45px;
        height: 45px;
        width: 58px;
      }
      .desc {
        height: 48px;
        margin-left: 20px;
        width: 240px;
        @include flex-box(flex-start, center, row, wrap);
      }
    }
  }
}
</style>
