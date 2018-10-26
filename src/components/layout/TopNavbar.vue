<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mr-auto" href="/">
            <img src="../../assets/rankings_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            RANKING QS 
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
            <ul class="navbar-nav mx-auto">
                <!-- Enlaces para navegacion -->
                <router-link tag="li" class="nav-item" 
                v-for="link in links" 
                v-bind:key="link.id" 
                :to="`${link.path}`"><a class="nav-link">{{link.name}}</a></router-link> 
            </ul>
            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{user.username}}
                        <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown" aria-labelledby="dropdownMenu2">
                        <a class="btn btn-danger" href="/login" role="button">Salir</a>
                    </div>
                </li>   
            </ul>          
        </div>
        <!--div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
        </div-->
    </nav>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { logout } from '@/store'
export default {
  name: "TopNavbar",
  data: () => ({
    usuario: {
      username: "xxxx"
    },
    links: [
      {
        id: 0,
        name: "Estudiantes",
        path: "/students"
      },
      {
        id: 1,
        name: "Profesores",
        path: "/teachers"
      },
      {
        id: 2,
        name: "Egresados",
        path: "/graduates"
      },
      {
        id: 3,
        name: "Integración",
        path: "/integration"
      },
      {
        id: 4,
        name: "Reportes",
        path: "/reports"
      },
      {
        id: 5,
        name: "Administración",
        path: "/admin"
      }
    ]
  }),
  mounted() {
    console.log("Usuario desde el Store: ", this.user);
    console.log("Usuario Local: ", this.usuario.username)
    //alert(this.usuario.username);
  },
  computed: {
    // ...mapState('', ['user'])
    ...mapGetters(["user"])
  } /*
    updated: {
        username: function(){
            // get user name from vuex
            //return 'Welcome' + this.$store.state.username;
            console.log("aqui " + this.$store.state.user.username);
            return this.$store.state.user.username;
        }
    }*/
};
</script>
