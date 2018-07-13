<template lang="pug">
  .section
    .header
      .title.ft-title General Infomation
      .sub-title.ft-sub-title Tell us who you are!
    .content.ft-form
      .row
        .col
          .label Name (optional)
          input(type="text", name="name", placeholder="Example Name").input-w220.ft-form
        .col
          .label Phone*
          input(type="text", name="phone", required, placeholder="0912 345 678").input-w220.ft-form
      .row
        .label Birth Date (optional)
      .row
        .inline
          input(type="number", name="year", min="1900", max="9999", placeholder="YYYY").input-w140.ft-form
          input(type="number", name="month", min="1", max="12", placeholder="MM").input-w140.ft-form
          input(type="number", name="day", min="1", max="31", placeholder="DD").input-w140.ft-form
      .row
        .label Address*
      .row
        .inline
          input(type="text", name="city", required, placeholder="City").input-w220.ft-form
          input(type="text", name="dist", required, placeholder="Dist").input-w220.ft-form
      .row
        input(type="text", name="address", required, placeholder="Address Detail").input.ft-form.addr-detail
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

.content {
  .row {
    @include flex-box(space-between, flex-start, none);

    .col {
      @include flex-box(space-between, flex-start, column);
    }

    .inline {
      @include flex-box(space-between, flex-start, none);
      width: 100%;
    }

    .addr-detail {
      margin-top: 24px;
    }
  }
}
</style>
