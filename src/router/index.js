import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from "@/views/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
