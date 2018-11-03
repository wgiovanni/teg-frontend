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
//import Reports2 from '@/components/reports/Reports2'
import Report from '@/components/reports/Report'
import ProportionOfInternationalFaculty from '@/components/reports/ProportionOfInternationalFaculty'
import ProportionOfInternationalStudents from '@/components/reports/ProportionOfInternationalStudents'
import CitationsPerFaculty from '@/components/reports/CitationsPerFaculty'
import ProportionOfStudentsPerFaculty from '@/components/reports/ProportionOfStudentsPerFaculty'
import StaffWithAPhD from '@/components/reports/StaffWithAPhD'
import FacultyStudentRatio from '@/components/reports/FacultyStudentRatio'
//import StudentSexFaculty from '@/components/reports/StudentSexFaculty'
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
          component: Students,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "facultad" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/teachers',
          name: 'Teachers',
          component: Teachers,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "facultad" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },/*,
        {
          path: '/graduates',
          name: 'Graduates',
          component: Graduates
        },*/
        {
          path: '/reports',
          name: 'Report',
          component: Report,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/ProportionOfInternationalFaculty',
          name: 'ProportionOfInternationalFaculty',
          component: ProportionOfInternationalFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/ProportionOfInternationalStudents',
          name: 'ProportionOfInternationalStudents',
          component: ProportionOfInternationalStudents,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/CitationsPerFaculty',
          name: 'CitationsPerFaculty',
          component: CitationsPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/ProportionOfStudentsPerFaculty',
          name: 'ProportionOfStudentsPerFaculty',
          component: ProportionOfStudentsPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/StaffWithAPhD',
          name: 'StaffWithAPhD',
          component: StaffWithAPhD,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/FacultyStudentRatio',
          name: 'FacultyStudentRatio',
          component: FacultyStudentRatio,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
       /* {
          path: '/report/CitationsPerFaculty',
          name: 'Citaciones por Facultad',
          component: CitationsPerFaculty
        },*/
        {
          path: '/integration',
          name: 'SystemParameterList',
          component: SystemParameterList,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "administrador") {
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
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/admin/new',
          name: 'New',
          component: New,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/admin/edit/:id',
          name: 'Edit',
          component: Edit,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/admin/delete/:id',
          name: 'Delete',
          component: Delete,
          beforeEnter (to, from, next) {
            console.log(store.state.user.name);
            if (store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
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

  if (authRequired && !localStorage.getItem('username') && !localStorage.getItem('user')){
    console.log("entro1");
    console.log("mandar al login");
    store.username = '';
    store.user = {};
    next('/login');

  } else {
    console.log(authRequired);
    console.log(localStorage.getItem('username'));
    store.state.username = localStorage.getItem('username')
    store.state.user = JSON.parse(localStorage.getItem('user'));
    //store.user = {}
    store.dispatch('getUsername', { username:  store.state.username})
        .then((response) => {
          store.state.user = response.data;
          next()
        }) 
        .catch(() => this.error ="Fallo")
    next();
  }
 
})

