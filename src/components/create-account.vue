<template lang="pug">
  .section
    .header
      .title.ft-title Create Account
      .sub-title.ft-sub-title Glad to see you here!
    .content.ft-form
      .label Account
      my-input(propId="email", :propValue="email", propType="text", :propValid="validEmail", propPlaceholder="example@email.com", propWarnMessage="INVALID EMAIL", propWarnDirection="right", @propUpdateData="updateData")
      
      .label Password
      my-input(propId="password", :propValue="password", propType="password", :propValid="validPassword", propWarnMessage="MINIMUM 8 CHARACTERS", propWarnDirection="right", propWarnSignClasses="fas fa-exclamation-triangle", @propUpdateData="updateData")

      .label Comfirm Password
      my-input(propId="passwordConfirm", :propValue="passwordConfirm", propType="password", :propValid="validPasswordConfirm", propWarnMessage="NOT MATCH", propWarnDirection="right", propWarnSignClasses="fas fa-exclamation-triangle", @propUpdateData="updateData")

      .submit(@click.stop="submitHandler" :disabled="!success" :class="{'active':success}") SUBMIT &amp; NEXT

</template>
<script>
export default {
  components: {
    'my-input': () => import("./form-component/input.vue")
  },
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    updateData(target, value) {
      console.log('updateData', target, value);
      this[target] = value;
    },
    submitHandler() {
      console.log("submit", this.email, this.password, this.passwordConfirm);
      if (!this.success) {
        return;
      }
      // this.http
      //   .post("http://localhost:38080/submit/create-account", {
      //     email: this.email,
      //     password: this.password
      //   })
      //   .then(res => {
      //     console.log("Submit success", res.data);
      //   })
      //   .catch(err => {
      //     throw new Error(`Submit fail: ${err}`);
      //   });
      this.updateParentAndGoNext();
    },
    updateParentAndGoNext() {
      this.$emit("emit-update-and-go-next", this.$route.path);
    }
  },
  computed: {
    validEmail() {
      console.log(this.verify.email(this.email));
      return this.verify.email(this.email);
    },
    validPassword() {
      console.log(this.verify.password(this.password));
      return this.verify.password(this.password);
    },
    validPasswordConfirm() {
      console.log(this.verify.passwordConfirm(this.password, this.passwordConfirm));
      return this.verify.passwordConfirm(this.password, this.passwordConfirm);
    },
    success() {
      return this.validEmail && this.validPassword && this.validPasswordConfirm;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/pages";
</style>
