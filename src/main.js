import Vue from "vue";
import router from "./router";
import store from "./store";
import AppLayout from "./layout/index.vue";
import "./scss/style.scss";
import "./assets/fonts/montserrat.css";
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(AppLayout)
}).$mount("#app");
//# sourceMappingURL=main.js.map