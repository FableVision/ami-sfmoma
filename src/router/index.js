import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/MainScreen.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gamescreen',
      name: 'gamescreen',
      component: () => import('../views/GameScreen.vue')
    },
    {
      path: '/intro1',
      name: 'intro1',
      component: () => import('../views/Intro1.vue')
    },
    {
      path: '/intro2',
      name: 'intro2',
      component: () => import('../views/Intro2.vue')
    },
    {
      path: '/questionscreen',
      name: 'questionscreen',
      component: () => import('../views/QuestionScreen.vue')
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: () => import('../views/EndScreen.vue')
    }
  ]
})

export default router
