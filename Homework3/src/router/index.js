import Vue from 'vue'
import Router from 'vue-router'
import whattodo from '@/components/whattodo'
import important from '@/components/important'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'whattodo',
      component: whattodo
    },
    {
      path: '/important',
      name: 'important',
      component: important
    }
  ]
})
