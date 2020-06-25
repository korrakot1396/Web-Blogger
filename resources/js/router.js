import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)

import home from './components/pages/Home'

import skill from './components/pages/Skill'

import hooks from './components/pages/basic/Hooks.vue'

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
     }
]

export default new Router({
     mode:'history', 
     routes
})