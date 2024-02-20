import { createRouter, createWebHistory } from 'vue-router'
const LandingPage = () => import('../views/landing/LandingPage.vue')
const LoginPage = () => import('../views/login/LoginPage.vue')
const ProfileLoginPage = () => import('../views/profile_after_login/ProfileLoginPage.vue')
const HelpPage = () => import('../views/help/HelpPage.vue')
const ProfileUser = () => import('../views/profile_user/ProfileUser.vue')
const HomePage = () => import('../views/HomePage.vue')

// import Home from '../views/Home.vue'

const routes = [
   {
    path: '/',
    component: HomePage
  },
  {
    path: '/landing',
    component: LandingPage
  },
   {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/change_password',
    component: ProfileLoginPage
  },
  {
    path: '/help',
    component: HelpPage
  },
   {
    path: '/profile_user',
    component: ProfileUser
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router