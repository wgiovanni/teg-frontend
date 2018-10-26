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
//import Integration from '@/components/integration/Integration'
import SystemParameterList from '@/components/integration/SystemParameterList'
import SystemParameterEdit from '@/components/integration/SystemParameterEdit'
import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'
import Delete from '@/components/admin/Delete'
import store from '@/store'

Vue.use(Router)

export const router = new Router({
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
          name: 'SystemParameterList',
          component: SystemParameterList,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/integration/edit/:id',
          name: 'SystemParameterEdit',
          component: SystemParameterEdit
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
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  //const loggedIn = ;
  console.log(store.state.user.username);
  if (authRequired && (store.state.user.username == undefined || store.state.user.username == null)) {

    //validador de token y todo lo demas
    // https://stackoverflow.com/questions/43378726/checks-in-vue-router-beforeeach-not-restricting-access-to-routes
    return next('/login')
  }
  next();
  /*store.dispatch('login').then(response => {
    next()
  }).catch(error => {
    next('/login')
  })*/

})
