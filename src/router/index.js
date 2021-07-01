import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(
        /* webpackChunkName: "admin-profile" */ "../pages/profile/index.vue"
      ),
  },
  {
    path: "/auth",
    name: "auth",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../pages/auth/Login.vue"),
      },
      {
        path: "register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../pages/auth/Register.vue"
          ),
      },
    ],
    component: () =>
      import(/* webpackChunkName: "auth" */ "../pages/auth/index.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../pages/home/admin/index.vue"),
  },
  {
    path: "/admin/profile",
    name: "admin-profile",
    component: () =>
      import(
        /* webpackChunkName: "admin-profile" */ "../pages/profile/index.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
