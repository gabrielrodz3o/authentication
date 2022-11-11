import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthViewVue from '@/views/AuthView.vue'
import FirebaseViewVue from '@/views/FirebaseView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'AuthViewVue',

    component: AuthViewVue
  },
  {
    path: '/firebase',
    name: 'FirebaseViewVue',

    component: FirebaseViewVue
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
