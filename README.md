# No.6 Validation

這次主要是目的是熟悉 Vue Component 的運用，
嘗試抽成共用 component，並利用 props 及 $emit 來達到資料傳遞、方法引用。
雖然功能上其實不需利用網址切換，但為了練習 vue-router，
所以表單頁面實作上是有網址切換，並有做到防止手動跳步。

測試用資料：
Visa  4556681494346585
Mastercard 5575779335091008
Discover 6011138621248741
American Express 376925441561077

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

### watch object/array

watch 無法監視整個物件或陣列的內容變化，且宣告時只能是 var.field.field... 的方式宣告，
若要監視一個物件/陣列中的任何內容有變化，必須透過宣告可執行函數來達成。

watch 可接受下面的宣告：

```js
data: {
  field: 'field',
  obj: {
    field1: 'obj.field1',
    field2: 'obj.field2',
    obj: {
      field1: 'obj.obj.field1',
      field2: 'obj.obj.field2',
    }
  },
  arr: [1, 2, 3]
},
computed: {
  computedForWatch() {
    return this.arr[0];
    // 監視 this.obj 的內容是否有任何的變動
    // return JSON.stringify(this.obj);
  }
},
watch: {
  field: function() {}, // 監視 field 值是否變動
  obj() {}, // 只能監視 obj 是否有重新指派
  arr() {}, // 只能監視 arr 是否有重新指派
  this.obj.field1() {}, // 同 field 只監視 obj.field1 值是否變動
  // arr[0]() {}, // 錯誤！watch 只接受 var.field.field...
  // 必須透過 computed
  computedForWatch: function(newValue, oldValue) {
    console.log('watch', 'computedForWatch', newValue, oldValue);
  }

  // 監視 vue-router 路徑的變動
  $route: function(route) { /* ... */ },
}
```

References:

- [vue-$watch的使用](https://my.oschina.net/zhangdq/blog/1610647)
- [How to watch only one object in an array?](https://stackoverflow.com/questions/43750569/how-to-watch-only-one-object-in-an-array)

### Express

```sh
npm i -D express
```

For ES6+: [example-node-server](https://github.com/babel/example-node-server)

```sh
npm i -D babel-cli
```

Setup express server:

```js
// server.js
import Express from 'express';

const server = Express();
const rootPath = './dist';
const port = 38080;
server.use(Express.static(rootPath));
server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}`);
```

package.json

```json
"scripts": {
  "start": "babel-node server.js"
}
```

Setup backend dependencies:

```sh
# body-parser: http post method for express
npm i -D body-parser express-fileupload image-size
```

```js
// server.js

import BodyParser from 'body-parser';
import FileUpload from 'express-fileupload';
import ImageSize from 'image-size';

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/submit/create-account', (req, res) => {
  console.log(req);
  res.send('OK');
})
```

Setup allow CORS

- [CORS on ExpressJS](https://enable-cors.org/server_expressjs.html)

```js
// server.js
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
```

Setup Content-Type for axios

> 因為 axios, ajax 預設 Content-Type 是採用 text/plain，Server 將不知如何解析，


- 設定全域：[axios 使用post方式傳遞參數，後端接受不到](https://segmentfault.com/a/1190000012635783)

```js
// main.js
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

- 個別指定: [Passing headers with axios POST request](https://stackoverflow.com/questions/44617825/passing-headers-with-axios-post-request-reactjs)

```js
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
axios.post("http://localhost:38080/submit/create-account", data, headers);
```

References:

- [axios全攻略](https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/)

---

### [remove chrome's input highlighting](https://stackoverflow.com/questions/2943548/how-to-reset-remove-chromes-input-highlighting-focus-border)

```css
.element {
  outline: none;
}
```

---

## Good sample from other challenger

[inwolf/the-f2e-w6](https://github.com/inwolf/the-f2e-w6/blob/master/src/components/FormCreate.vue)

- [Demo](https://inwolf.github.io/the-f2e-w6/)
- 特色：
  - 使用 [vee-validate](https://baianat.github.io/vee-validate/) 來實現表單驗證
  - 可以在個別欄位顯示錯誤，也可以在送出時顯示所有不符欄位的訊息

[kanboo/vue_FormValidation](https://github.com/kanboo/vue_FormValidation)

- [Demo](https://kanboo.github.io/vue_FormValidation/dist/#/)
- 特色：
  - 專案架構值得參考
    - 採用將 .vue 拆為 vue, scss, html 的方式
  - 有實作[檔案上傳預覽及驗證](https://github.com/kanboo/vue_FormValidation/blob/master/src/components/FormUpdateProfilePicture/index.vue)
  - 採用元件
    - 使用 vuex 來作狀態管理
      - mapState
      - mapMutations
    - VueAxios
    - vee-validate

[genepan2641/thef2e-006-validator](https://github.com/genepan2641/thef2e-006-validator/)

- [Demo](https://genepan2641.github.io/thef2e-006-validator/)
- 特色：
  - 有實作出所有頁面
  - 採用[單一網址切換元件](https://github.com/genepan2641/thef2e-006-validator/blob/master/src/App.vue)
  - 使用[vee-validate](https://github.com/genepan2641/thef2e-006-validator/blob/master/src/main.js)
  - 檔案上傳採用[_URL.createObjectURL](https://github.com/genepan2641/thef2e-006-validator/blob/master/src/components/StepThree.vue)

[goodahoq/w6-validation](https://github.com/goodahoq/w6-validation/blob/master/src/components/step4.vue)

- 特色：
  - 日期選擇套用element-ui
    - [Demo](https://goodahoq.github.io/w6-validation/#/step4)
    - [SourceCode](https://github.com/goodahoq/w6-validation/blob/master/src/components/step4.vue)


[runkids/F2E-Validation](https://github.com/runkids/F2E-Validation)

- [Demo](https://runkids.github.io/f2e/week6/#/)
- 特色：
  - 並無按照規格書走，但實作出 firebase 版的帳號申請及權限驗證功能

[EasonChang0115/week6-validation](https://github.com/EasonChang0115/week6-validation)

- [Demo](https://easonchang0115.github.io/week6-demo)
- 特色：
  - 有實作所有頁面
  - 採用 vuex
  - progress-bar 有 transition
  - online [CV](https://easonchang0115.github.io/resume/) 值得參考 

[miausf2e](https://gitlab.com/MiausF2E/f2e-validation)

- [Demo](https://miausf2e.gitlab.io/f2e-validation/)
- 特色：
  - 有實作所有頁面
  - [採用元件](https://gitlab.com/MiausF2E/f2e-validation/blob/master/src/main.js)
    - vee-validate
    - vue-mq
  - [圖片上傳預覽](https://gitlab.com/MiausF2E/f2e-validation/blob/master/src/views/ProfilePicture.vue)

[fchsu/No6.Validation](https://github.com/fchsu/No6.Validation)

- [Demo](https://fchsu.github.io/No6.Validation/dist/index.html)
- 有實作所有頁面
