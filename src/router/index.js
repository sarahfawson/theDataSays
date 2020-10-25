import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import projects from '@/components/projects'
import About from '@/components/About'
import Thesis from '@/components/Thesis'
import BadGateway from '@/components/BadGateway'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/projects',
      name: 'projects',
      props: { page: 2 },
      component: projects
    },
    {
      path: '/about',
      name: 'About',
      props: { page: 3 },
      component: About
    },
    {
      path: '/thesis',
      name: 'Thesis',
      props: { page: 4 },
      component: Thesis
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
      props: { page: 5 },
      redirect: '/404'
    }
  ]
})
