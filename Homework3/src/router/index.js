import Vue from 'vue'
import Router from 'vue-router'
import whattodo from '@/components/whattodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'whattodo',
      component: whattodo
    }
  ]
})
