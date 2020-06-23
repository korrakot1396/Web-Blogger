import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)

import firstPages from './components/pages/myFirstVuePage'

import twoPages from './components/pages/newRoutePage'

const routes = [
     {
          path: '/my-new-vue-route',
          component: firstPages
     },

     {
          path: '/new-route-vue-page',
          component: twoPages
     }
]

export default new Router({
     mode:'history', 
     routes
})