import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UsersView from '../views/UsersView.vue'
import ArchivesView from '../views/ArchivesView.vue'
import TestView from '../views/TestView.vue'
import CarouselView from '../views/CarouselView.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users',
    name: 'UsersView',
    component: UsersView
    
  },
  {
    path: '/archives',
    name: 'ArchivesView',
    component: ArchivesView
    
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
    
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: CarouselView
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
