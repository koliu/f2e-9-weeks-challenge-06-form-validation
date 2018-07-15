<template lang="pug">
  .section
    .header
      .title.ft-title Payment Method
      .sub-title.ft-sub-title Add your credit card infomation! 
    .content.ft-form
      .row
        .label Card Number
      .row
        input(type="text", name="name", placeholder="1234 5678 9012 3456").input.ft-form
      .row
        .col
          .label Cardholder Name
          input(type="text", name="cardholder", placeholder="EXAMPLE NAME").input-w220.ft-form
        .col
          .label Bank Name
          input(type="text", name="bank", required, placeholder="EXAMPLE BANK").input-w220.ft-form
      .row
        .col.mr-18
          .label CVV
          input(type="text", name="cardholder", placeholder="EXAMPLE NAME").input-w140.ft-form
        .col
          .label Expire Date
          .inline
            input(type="number", name="month", min="1", max="12", placeholder="MM").input-w140.ft-form.mr-18
            input(type="number", name="day", min="1", max="31", placeholder="DD").input-w140.ft-form

      .submit(@click.stop="submitHandler" :disabled="!success" :class="{'active':success}") SUBMIT &amp; DONE

</template>
<script>
export default {
   methods: {
    submitHandler() {
      if (!this.success) {
        return;
      }
      this.updateParentAndGoNext();
    },
    updateParentAndGoNext() {
      this.$emit("emit-update-and-go-next", this.$route.path);
    }
  },
  computed: {
    success() {
      return true;
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

.mr-18 {
  margin-right: 18px;
}
</style>
