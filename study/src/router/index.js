import { createRouter, createWebHistory } from 'vue-router'
import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
import About from '@/components/About'

import HelloWorld from '@/components/HelloWorld'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/day/:date',
    name: 'day',
    component: Day
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
