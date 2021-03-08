import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Characters from "../views/Characters.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Characters",
    component: Characters
  }
];

const router = new VueRouter({
  routes
});

export default router;
