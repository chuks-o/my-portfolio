import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/portfolio'
import Home from '@/components/Home'
import Contact from '@/components/contactMe'
import Certification from '@/components/certification'

Vue.use(Router)

export default new Router({
  linkActiveClass: true,
  mode: 'history',
  routes: [
    { path: '*', redirect: '/my-portfolio' },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {
      path: '/contact-me',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/google-cert',
      name: 'Certification',
      component: Certification
    }
  ]
})
