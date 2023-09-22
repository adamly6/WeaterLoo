import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "signin",
      component: () => import("@/views/SignIn.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/sign-up",
      component: () => import("@/views/SignUp.vue"),
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "signin" });
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
