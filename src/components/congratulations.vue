<template lang="pug">
  .section.ft-form
    .header
      .title.ft-title Congratulations
      .sub-title.ft-sub-title Now you’re one of us! 
    .content
      i.fas.fa-smile.blue-lighter
    .footer.italic.blue
      i Redirected to homepage after
      i 5
      i seconds…

</template>
<script>
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
@import "../css/partials/predefined";

.section {
  .content {
    @include flex-box(center, center);

    i {
      font-size: 230px;
      padding-top: 24px;
      padding-bottom: 40px;
    }
  }
  .footer {
    @include flex-box(center, center);
  }
}

</style>
