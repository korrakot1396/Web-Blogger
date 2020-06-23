import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)

import firstPages from './components/pages/myFirstVuePage'

const routes = [
     {
          path: '/my-new-vue-route',
          component: firstPages
     }
]

export default new Router({
     mode:'history', 
     routes
})