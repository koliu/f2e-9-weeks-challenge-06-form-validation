<template lang="pug">
  .section
    .header
      .title.ft-title Create Account
      .sub-title.ft-sub-title Glad to see you here!
    //- form(action="/submit/create-account" method="POST" enctype="application/x-www-form-urlencoded")
    .content.ft-form
      .label Account
      input(type="text", v-model="email", placeholder="example@email.com", required).input.ft-form
      .label Password
      input(type="password", v-model="password", placeholder="●●●●●●●●", required).input.ft-form
      .label Comfirm Password
      input(type="password", v-model="passwordConfirm", placeholder="●●●●●●●●", required).input.ft-form
      .submit(@click.stop.prevent="submitHandler") SUBMIT &amp; NEXT

</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    submitHandler() {
      console.log('submit', this.email, this.password);
      this.http
        .post("http://localhost:38080/submit/create-account", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log("Submit success", res.data);
        })
        .catch(err => {
          throw new Error(`Submit fail: ${err}`);
        });
    },
    updateParentAndGoNext() {
      this.$emit("emit-update-and-go-next", this.$route.path);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/pages";
</style>
