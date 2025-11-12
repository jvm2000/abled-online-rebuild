import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../pages/index.vue'
import News from '../pages/news.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: IndexPage
  },
  { path: '/news/abled-online-bags-first-prize-in-tokyo', name: 'News', component: News }
]

const router = createRouter({
  history: createWebHistory('/v2/'),
  routes
})

export default router