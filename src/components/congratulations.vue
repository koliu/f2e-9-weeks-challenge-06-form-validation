<template lang="pug">
  .section.ft-form
    .header
      .title.ft-title Congratulations
      .sub-title.ft-sub-title Now you’re one of us! 
    .content
      i.fas.fa-smile.blue-lighter
    .footer.italic.blue
      i Redirected to homepage after
      i.sec {{timeout}}
      i seconds…

</template>
<script>
export default {
  data() {
    return {
      timeout: 5
    }
  },
  created() {
    const redirect = setInterval(() => {
      this.timeout--;
      if(this.timeout < 1) {
        this.navigator.pushTo("/about");
        clearInterval(redirect);
      }
    }, 1000);
  }
}
</script>
<style lang="scss" scoped>
@import "../css/pages";

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

    .sec {
      display: inline-block;
      margin: 0 8px;
    }
  }
}
</style>
