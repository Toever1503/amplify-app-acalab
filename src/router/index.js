import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/Payment.vue"),
    },
    // FIXME: views 에 UploadGuide와 Profile 추가
    // {
    //   path: "/uploadguide",
    //   component: () => import('../views/Payment.vue')
    // },
    // {
    //   path: "/profile",
    //   component: () => import('../views/Payment.vue')
    // },
  ],
});

export default router;
