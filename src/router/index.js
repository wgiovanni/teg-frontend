import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Students from '@/components/students/Students'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Users from '@/components/admin/Users'
import Dashboard from '@/components/layout/Dashboard'
import Teachers from '@/components/teachers/Teachers'
import Graduates from '@/components/graduates/Graduates'
import Reports from '@/components/reports/Reports'
import Integration from '@/components/integration/Integration'
import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'
import Delete from '@/components/admin/Delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Dashboard,
      redirect: '/home',
      children: [
        {
          path:'/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/students',
          name: 'Students',
          component: Students
        },
        {
          path: '/teachers',
          name: 'Teachers',
          component: Teachers
        },
        {
          path: '/graduates',
          name: 'Graduates',
          component: Graduates
        },
        {
          path: '/reports',
          name: 'Reports',
          component: Reports
        },
        {
          path: '/integration',
          name: 'Integration',
          component: Integration
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }, 
        {
          path: '/admin',
          name: 'Admin',
          component: Users,
        },
        {
          path: '/admin/new',
          name: 'New',
          component: New,
        },
        {
          path: '/admin/edit/:id',
          name: 'Edit',
          component: Edit,
        },
        {
          path: '/admin/delete/:id',
          name: 'Delete',
          component: Delete,
        },
      ]
    }
  ],
  mode: 'history',
})
