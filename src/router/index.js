import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/authors',
      name: 'Authors',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }, 
    {
      path:'/root',
      name: 'Root',
      component: Root
    }
  ]
})
