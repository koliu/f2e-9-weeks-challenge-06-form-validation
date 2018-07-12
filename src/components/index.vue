<template lang="pug">
  .wrap
    div {{page}}
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
.wrap {
  height: 100%;
}
.contaier {
  height: 100%;

  .top {
    height: 100px;
    .process-state {
      height: 30px;
    }
  }
}
</style>
