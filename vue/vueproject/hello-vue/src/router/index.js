import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: About
  },
  {
    path: "/test",
    name: "test",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/githubcommits",
    name: "githubcommits",
    component: () => import("../views/GitHubCommits.vue")
  },
  {
    path: "/griddemo",
    name: "girddemo",
    component: () => import("../views/GridDemo.vue")
  },
  {
    path: "/treedemo",
    name: "treedemo",
    component: () => import("../views/TreeDemo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
