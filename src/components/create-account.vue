<template lang="pug">
  .section
    .header
      .title.ft-title Create Account
      .sub-title.ft-sub-title Glad to see you here!
    //- form(action="/submit/create-account" method="POST" enctype="application/x-www-form-urlencoded")
    .content.ft-form
      .label Account
      input(type="text", id="email", v-model="email", @focus="focusElement='email'", @blur="focusElement=''", placeholder="example@email.com", :class="{'focus' : focusElement === 'email', 'warn' : email !== '' && !validEmail}").input.ft-form
      label(for="email", :class="{'warn' : email !== '' && !validEmail}").email.warn-right.ft-label
        label(for="email", v-if="email !== '' && !validEmail").warn-sign.fas.fa-exclamation-triangle
      
      .label Password
      input(type="password", v-model="password", @focus="focusElement='password'", @blur="focusElement=''", placeholder="●●●●●●●●", :class="{'focus' : focusElement === 'password', 'warn' : password !== '' && !validPassword}").input.ft-form
      label(for="password", :class="{'warn' : password !== '' && !validPassword}").password.ft-label
        label(for="password", v-if="password !== '' && !validPassword").warn-sign.fas.fa-exclamation-triangle
      
      .label Comfirm Password
      input(type="password", v-model="passwordConfirm", @focus="focusElement='passwordConfirm'", @blur="focusElement=''", placeholder="●●●●●●●●", :class="{'focus' : focusElement === 'passwordConfirm', 'warn' : passwordConfirm !== '' && !validPasswordConfirm}").input.ft-form
      label(for="passwordConfirm", :class="{'warn' : passwordConfirm !== '' && !validPasswordConfirm}").passwordConfirm.ft-label
        label(for="passwordConfirm", v-if="passwordConfirm !== '' && !validPasswordConfirm").warn-sign.fas.fa-exclamation-triangle

      .submit(@click.stop="submitHandler" :disabled="!success" :class="{'active':success}") SUBMIT &amp; NEXT

</template>
<script>
export default {
  data() {
    return {
      focusElement: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
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

label {
  position: relative;

  &.email.warn {
    @include warn-tool-tip(right, "INVALID EMAIL");
  }

  &.password.warn {
    @include warn-tool-tip(right, "MINIMUM 8 CHARACTERS");
  }

  &.passwordConfirm.warn {
    @include warn-tool-tip(right, "NOT MATCH");
  }
}
</style>
