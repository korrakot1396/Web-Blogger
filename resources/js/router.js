import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)

import firstPages from './components/pages/Home'

import twoPages from './components/pages/Skill'

const routes = [
     {
          path: '/home',
          component: firstPages
     },

     {
          path: '/skill',
          component: twoPages
     }
]

export default new Router({
     mode:'history', 
     routes
})