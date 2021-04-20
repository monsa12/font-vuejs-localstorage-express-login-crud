import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Home from './components/Home'
import About from './components/About'

import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Register from './components/Register.vue'

import Notes from './components/user/Notes'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
      meta: {
        // requiresAuth: true
      }
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return;
    }
    next('/login');
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isLoggedIn) {
      next({ name: 'about' })
      return;
    }
    next();
  }
  else {
    next();
  }
})

export default router