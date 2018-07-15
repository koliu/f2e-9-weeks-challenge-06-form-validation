<template lang="pug">
  .container
    .about
      .about-item
        i 我是 KO
        br
        i 一個 fullstack 導向的攻城獅
        br
        i 這裡是攻打 F2E 的第 6 座城堡 -- Form Validation
        br
        i 目前已攻下： create-account, general-info, congratulations
        br
        i 待進攻： 檔案上傳前後端、payment-method
        br
        i 採用的武器有
        br
        ul
          li vue
          li vue-cli
          li css animation/transition
          li scss
          li pug
      .about-item
        i 這次主要是練習 vue 及 vue-router 的使用
        br
        i 將 input 及 warn 抽成共用的 vue component
        br
        i 並利用 props 及 emit 來父子元件互傳資料
        br
        i 以及能鎖定在未完成的 route 上
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      show: "about"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  align-items: center;
  border: 1px dotted #fff;
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 59999;
}

.about {
  align-items: center;
  /* border: 1px dashed #2397f5; */
  display: flex;
  flex-flow: column nowrap;
  /* height: 90%; */
  margin-top: 24px;
  /* width: 90%; */

  .about-item {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #f5a623;
    line-height: 30px;
    padding: 24px;
    margin-bottom: 10px;
  }
}

ul {
  list-style-type: circle;
  padding-left: 40px;
}
</style>
