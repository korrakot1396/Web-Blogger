import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)


import skill from './components/pages/skill'

import hooks from './components/pages/basic/hooks.vue'

import methods from './components/pages/basic/methods.vue'

//project pages
import home from './components/pages/home'

import tags from './components/pages/tags'

const routes = [
     //project routes....


     {
          path: '/',
          component: home
     },

     {
          path: '/tags',
          component: tags
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