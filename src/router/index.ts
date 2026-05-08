import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from '../pages/LandingView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Landing },
  // { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})