# No.6 Validation

---

## [DEMO](dist/)

## [spec](https://hexschool.github.io/THE_F2E_Design/week6-validation)


## Note

### Input file

檔案上傳的標籤是：

```pug
input(type="file", name="photo", accept="image/*", multiple)
```

accept:
  是指接受選取的檔案類型，但只是預設檔案選取，使用者還是可以選其他類型，此外，拖拉時只直無視，應該再用其他方式避免。
  格式：
    - 個別副檔名： .gif, .jpg, .png, .doc
    - 類型： audio/*, video/*, image/*
    - [media_type](https://www.iana.org/assignments/media-types/media-types.xhtml)
multiple: 可複選。

References:

- [\<input type="file">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [HTML <input> accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp)
- []()

排版方面，可利用 opacity: 0 來隱藏檔案選取的按鈕。

### 使用 setInterval 時記得要清除

```js
const redirect = setInterval(() => {
  this.timeout--;
  if(this.timeout < 1) {
    this.navigator.pushTo("/404");
    // 少了這行導向後任何網址都會再自動導向到 /404
    clearInterval(redirect);
  }
}, 1000);
```

### 設定 router-view 的 emit

References:
- [Pass data from parent view to child router view](https://forum.vuejs.org/t/pass-data-from-parent-view-to-child-router-view/27926): 提到了 router-view emit 的設法
- [Creating a Global Event Bus with Vue.js](https://alligator.io/vuejs/global-event-bus/): 利用全域的事件匯流排
- [Emitting events from vue-router](https://forum.vuejs.org/t/emitting-events-from-vue-router/10136): 此文中有提到透過 watch $route 控制樣式，而不用 $emit 的[範例](https://jsfiddle.net/nxrq5rhe/2/)
- [Log In Passing props through router-link](https://forum.vuejs.org/t/passing-props-through-router-link-solved/16868): 這篇是提到如何在 router-link 傳遞參數到其他元件

```pug
<!-- parent -->
router-view(@test-emit="testEmit")

script
  methods: {
    testEmit(callerPath) {}
  }

<!-- child -->
.submit(@click="callParent")

script
  methods: {
    callParent() {
      this.$emit('test-emit', ...);
    }
  }
```
