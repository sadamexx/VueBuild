import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";

// Buefy's components
import { Input, Field } from "buefy";
Vue.use(Input);
Vue.use(Field);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
