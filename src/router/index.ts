// router/index.ts
import Home from "../components/Home.vue";
import History from "../pages/History.vue";
import Puzzle from "../pages/Puzzle.vue";
import Quiz from "../pages/Quiz.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/historia", name: "History", component: History },
  { path: "/rompecabezas", name: "Puzzle", component: Puzzle },
  { path: "/quiz", name: "Quiz", component: Quiz },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
