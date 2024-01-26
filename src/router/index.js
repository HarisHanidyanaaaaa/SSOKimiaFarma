import { createRouter, createWebHistory } from 'vue-router'
const LandingPage = () => import('../views/landing/LandingPage.vue')
const LoginPage = () => import('../views/login/LoginPage.vue')

// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/landing',
    component: LandingPage
  },
   {
    path: '/login',
    component: LoginPage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router