import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import LearningView from '../components/LearningView.vue';
import GradesView from "@/components/GradesView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/learning',
    name: 'Learning',
    component: LearningView,
  },
  {
    path:'/grades',
    name: 'Grades',
    component: GradesView,
  },

  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
