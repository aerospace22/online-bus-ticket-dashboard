import { createRouter, createWebHistory, Router } from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/404.vue"),
    },
    {
      path: "/app/login",
      name: "auth-login",
      component: () => import("@/views/auth/login.vue"),
    },
    {
      path: "/app/dashboard",
      name: "dashboard-home",
      component: () => import("@/views/dashboard/home.vue"),
    },

    /**
     * Bookings
     */
    {
      path: "/app/dashboard/bookings/bus-routes",
      name: "dashboard-bookings-bus-routes",
      component: () => import("@/views/dashboard/bookings/bus-routes/index.vue"),
    },
  ],
});

export default router;
