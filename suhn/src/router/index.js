import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import NewPage from '@/pages/NewPage'
import ShowPage from '@/pages/ShowPage'
import AskPage from '@/pages/AskPage'
import CommentsPage from '@/pages/CommentsPage'

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
    },
    {
      path: '/show',
      name: 'ShowPage',
      component: ShowPage
    },
    {
      path: '/ask',
      name: 'AskPage',
      component: AskPage
    },
    {
      path: '/comments/:id',
      name: 'CommentsPage',
      props: true,
      component: CommentsPage
    }
  ]
})
