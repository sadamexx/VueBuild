import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import NProgress from "nprogress";
// import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: 'Profile',
  //   props: true,
  //   beforeEnter(routeTo, routeFrom, next){
  //     store.dispatch('profile/fetchProfile')
  //   }
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// starts the progress bar when routing begins
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

// ends progress bar when routing is about to end
router.afterEach(() => {
  NProgress.done();
});

export default router;
