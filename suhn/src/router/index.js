import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import NewPage from '@/pages/NewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/new',
      name: 'NewPage',
      component: NewPage
    }
  ]
})
