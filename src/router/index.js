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
import AuditList from '@/components/audit/AuditList'

// Reports
//import Report from '@/components/reports/Report'
import ReportsHome from '@/components/reports/ReportsHome'
import ReportsStudents from '@/components/reports/ReportsStudents'

//QS Ranking
import CitationsPerFaculty from '@/components/reports/qs/CitationsPerFaculty'
import FacultyStudentRatio from '@/components/reports/qs/FacultyStudentRatio'
import ProportionOfInternationalFaculty from '@/components/reports/qs/ProportionOfInternationalFaculty'
import ProportionOfInternationalStudents from '@/components/reports/qs/ProportionOfInternationalStudents'
import ProportionOfStudentsPerFaculty from '@/components/reports/qs/ProportionOfStudentsPerFaculty'
import StaffWithAPhD from '@/components/reports/qs/StaffWithAPhD'


//Students

import ForeignStudentsPerFaculty from '@/components/reports/students/ForeignStudentsPerFaculty'
import StudentsDisabilityPerFaculty from '@/components/reports/students/StudentsDisabilityPerFaculty'
import StudentsEthnicGroupsPerFaculty from '@/components/reports/students/StudentsEthnicGroupsPerFaculty'
import StudentsSexFaculty from '@/components/reports/students/StudentsSexFaculty'
import UndergraduateStudentsNationality from '@/components/reports/students/UndergraduateStudentsNationality'
import UndergraduateStudentsSex from '@/components/reports/students/UndergraduateStudentsSex'


//Teachers
import ProportionOfTeachersByRank from '@/components/reports/teachers/ProportionOfTeachersByRank'
import PublicationsPerFaculty from '@/components/reports/teachers/PublicationsPerFaculty'
import TeachersNationalityFaculty from '@/components/reports/teachers/TeachersNationalityFaculty'
import TeachersSexFaculty from '@/components/reports/teachers/TeachersSexFaculty'
import TeachersWithAPhDPerFaculty from '@/components/reports/teachers/TeachersWithAPhDPerFaculty'


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
            if (store.state.user.name != "facultad_estudiante" && store.state.user.name != "administrador" && store.state.user.name != "vicerrector") {
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
            if (store.state.user.name != "facultad_docente" && store.state.user.name != "administrador"  && store.state.user.name != "vicerrector") {
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
      /*
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
        */
        {
          path: '/reports',
          name: 'ReportsHome',
          component: ReportsHome,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/reports',
          name: 'ReportsStudents',
          component: ReportsStudents,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
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
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/ForeignStudentsPerFaculty',
          name: 'ForeignStudentsPerFaculty',
          component: ForeignStudentsPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },         
     
        
        {
          path: '/report/StudentsDisabilityPerFaculty',
          name: 'StudentsDisabilityPerFaculty',
          component: StudentsDisabilityPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },               
        {
          path: '/report/StudentsEthnicGroupsPerFaculty',
          name: 'StudentsEthnicGroupsPerFaculty',
          component: StudentsEthnicGroupsPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/StudentsSexFaculty',
          name: 'StudentsSexFaculty',
          component: StudentsSexFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/UndergraduateStudentsNationality',
          name: 'UndergraduateStudentsNationality',
          component: UndergraduateStudentsNationality,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/UndergraduateStudentsSex',
          name: 'UndergraduateStudentsSex',
          component: UndergraduateStudentsSex,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        
     
        {
          path: '/report/ProportionOfTeachersByRank',
          name: 'ProportionOfTeachersByRank',
          component: ProportionOfTeachersByRank,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/PublicationsPerFaculty',
          name: 'PublicationsPerFaculty',
          component: PublicationsPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/TeachersNationalityFaculty',
          name: 'TeachersNationalityFaculty',
          component: TeachersNationalityFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/TeachersSexFaculty',
          name: 'TeachersSexFaculty',
          component: TeachersSexFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        {
          path: '/report/TeachersWithAPhDPerFaculty',
          name: 'TeachersWithAPhDPerFaculty',
          component: TeachersWithAPhDPerFaculty,
          beforeEnter (to, from, next) {
            console.log("AQYUIIIIIII: " + store.state.user);
            //store.state.user = JSON.parse(store.state.user);
            if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
              console.log("No entro");
              next('/home')
            } else {
              console.log("vamos a integracion");
              next()
            }
          }
        },
        
    
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
          component: SystemParameterEdit,
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
        {
          path: '/audit',
          name: 'AuditList',
          component: AuditList,
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
      }
      ]
    }
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !localStorage.getItem('user')){
    console.log("entro1");
    console.log("mandar al login");
    //store.username = '';
    store.user = {};
    next('/login');

  } else {
    console.log(authRequired);
    //console.log(localStorage.getItem('username'));
    //store.state.username = localStorage.getItem('username')
    store.state.user = JSON.parse(localStorage.getItem('user'));
    //store.user = {}
    /*store.dispatch('getUsername', { username:  store.state.username})
        .then((response) => {
          store.state.user = response.data;
          next()
        }) 
        .catch(() => this.error ="Fallo")*/
    next();
  }
 
})

