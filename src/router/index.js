import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import LearningView from '../components/LearningView.vue';
import GradesView from "@/components/GradesView";
import InstellingenView from "@/components/InstellingenView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/oefening',
    name: 'Learning',
    component: LearningView,
  },
  {
    path:'/graden',
    name: 'Grades',
    component: GradesView,
  },
  {
    path:'/instellingen',
    name: 'Instellingen',
    component: InstellingenView
  }

  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
