import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(
        /* webpackChunkName: "admin-profile" */ "../pages/profile/index.vue"
      ),
    meta: {
      requiresAuth: true,
    },
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
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuth = localStorage.getItem("token");
    if (!isAuth) {
      next({
        path: "/auth/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
