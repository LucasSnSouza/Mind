import { createRouter, createWebHistory } from 'vue-router'

import ViewLoginScreen from '@/views/ViewLoginScreen.vue';
import ViewHomeScreen from '@/views/ViewHomeScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SingUp',
      component: ViewLoginScreen
    },
    {
      path: '/home-view',
      name: 'HomeView',
      component: ViewHomeScreen
    },
  ]
})

export default router
