import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Transactions from "../views/Transactions.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Transaction",
    component: Transactions
  }
];

const router = new VueRouter({
  routes
});

export default router;
