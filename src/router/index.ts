import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import User from '../components/User.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/user",
    name: "user",
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
