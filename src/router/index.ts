import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: IndexPage
  },
  // Add more pages like:
  // { path: '/about', name: 'About', component: AboutPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router