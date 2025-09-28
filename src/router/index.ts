import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import Todos from '../views/Todos.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

