import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Root from '@/components/Root'
import Admin from '@/components/Admin'
import Admin2 from '@/components/Admin2'
import Users from '@/components/users/Users'

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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Admin2
    },
    {
      path: '/adminUsers',
      name: 'Users',
      component: Users
    }
  ]
})
