<template lang="pug">
  .section
    .header
      .title.ft-title Create Account
      .sub-title.ft-sub-title Glad to see you here!
    .content.ft-form
      .label Account
      input(type="text", placeholder="example@email.com", required).input.ft-form
      .label Password
      input(type="password", placeholder="●●●●●●●●", required).input.ft-form
      .label Comfirm Password
      input(type="password", placeholder="●●●●●●●●", required).input.ft-form
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
@import "../css/pages";
</style>
