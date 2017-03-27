import Vue from 'vue'
import Router from 'vue-router'
import NewPage from '@/pages/NewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewPage',
      component: NewPage
    }
  ]
})
