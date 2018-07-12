<template lang="pug">
  .section.ft-form
    .header
      .title.ft-title Update Profile Picture
      .sub-title.ft-sub-title We wanna know you more!
    input(type="file", multiple).selector
    .chose
    .submit SUBMIT &amp; NEXT

</template>
<script>
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
@import "../css/partials/predefined";

.section {
  input[type='file'] {
    border: 2px solid $color-black;
    border-radius: 8px;
    height: 140px;
    margin-top: 24px;
    width: 460px;
  }
}

</style>
