import { createRouter, createWebHistory } from 'vue-router'

import ViewHomeScreen from '@/views/ViewHomeScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHomeScreen
    },
  ]
})

export default router
