<template lang="pug">
  .wrap
    .container
      .top
        ul.process-state
          li
            router-link(to="/") create-account
          li 
            router-link(to="/general-info") general-info
          li
            router-link(to="/update-profile-picture") update-profile-picture
          li
            router-link(to="/payment-method") payment-method
          li
            router-link(to="/congratulations") congratulations
      .main
        router-view
</template>
<script>
export default {
  data: function() {
    return {
      page: "index"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
@import "../css/partials/predefined";

.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 54px;
}
.container {
  border-top: 8px solid $color-blue;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  height: 100%;
  width: 456px;

  .top {
    height: 100px;
    .process-state {
      height: 30px;
    }
  }
}
</style>
