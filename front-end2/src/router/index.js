import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/NormalNavigation/Home'
import About from '@/components/NormalNavigation/About'
import Whatis from '@/components/NormalNavigation/Whatis'
import Getstarted from '@/components/NormalNavigation/Getstarted'
import Fun from '@/components/NormalNavigation/Fun'
import Signin from '@/components/NormalNavigation/Signin'
import Signup from '@/components/NormalNavigation/Signup'
import Dashboard from '@/components/AdvancedNavigation/Dashboard'
import Setup from '@/components/AdvancedNavigation/Setup'
import FAQ from '@/components/footerNavigation/FAQ'
import TOS from '@/components/footerNavigation/TOS'
import Privacy from '@/components/footerNavigation/Privacy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Whatis',
      name: 'Whatis',
      component: Whatis
    },
    {
      path: '/Getstarted',
      name: 'Getstarted',
      component: Getstarted
    },
    {
      path: '/Fun',
      name: 'Fun',
      component: Fun
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/TOS',
      name: 'TOS',
      component: TOS
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/Setup',
      name: 'Setup',
      component: Setup
    }
  ]
})
