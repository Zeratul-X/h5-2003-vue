import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Footer from '../components/Footer.vue'
import Qianggou from '../components/Qianggou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/Qianggou',
    name: 'Qianggou',
    component: Qianggou
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
