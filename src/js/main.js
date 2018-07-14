import resetCSS from "../css/reset.css";
import style from "../css/main.scss";
import Axios from "./axios.min.js";
import Vue from "vue";
import VueRouter from "vue-router";
import routerConfig from "./router";

/* vue components */
import App from "../app.vue";

/* custom libs */
import Navigator from "./my-vue-navigator";
import Login from "./login";
import DataVerify from "./utils/form-data-verify";


Vue.use(VueRouter);
const router = new VueRouter(routerConfig);
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Global tool
Vue.mixin({
  data() {
    return {
      navigator: Navigator,
      loginManager: Login,
      http: Axios,
      verify: DataVerify
    };
  },
  created() {
    Navigator.context = this;
  }
});

Vue.directive('data-verify', {
  bind: (el, binding, vnode) => {
    console.log('data-verify', 'bind', el, binding, vnode);
    el.className = '';
  },
  update: (el, binding) => {
    console.log('validate-email', 'update', el);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(el.value).toLowerCase())) {
      el.className = 'form-control is-valid';
    } else {
      el.className = 'form-control is-invalid';
    }
  }
});

Vue.filter('trim', n => String.trim(n));

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
