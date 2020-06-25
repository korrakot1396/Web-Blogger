import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)

import home from './components/pages/home'

import skill from './components/pages/skill'

import hooks from './components/pages/basic/hooks.vue'

import methods from './components/pages/basic/methods.vue'

const routes = [
     {
          path: '/home',
          component: home
     },

     {
          path: '/skill',
          component: skill
     }
     ,
     //vue hooks
     {
          path: '/hooks',
          component: hooks
     },
     //more basics
     {
          path: '/methods',
          component: methods
     },
]

export default new Router({
     mode:'history', 
     routes
})