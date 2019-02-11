import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import AboutUs from './views/AboutUs'
import Contact from './views/Contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component:AboutUs
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact
    }
  ]
})
