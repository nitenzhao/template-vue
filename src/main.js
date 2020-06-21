import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import VueGoodTablePlugin from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/icons"; // icon
import "@/permission"; // permission control

Vue.use(ElementUI, { locale });

Vue.use(VueGoodTablePlugin);

Vue.config.productionTip = false;

// 引入fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
