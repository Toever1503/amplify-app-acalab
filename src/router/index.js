import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
    },
    {
      path: "/payment1",
      name: "payment1",
      component: () => import("../views/Payment1.vue"),
    },
    {
      path: "/uploadguide",
      name: "uploadguide",
      component: () => import("../views/UploadGuide.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});
