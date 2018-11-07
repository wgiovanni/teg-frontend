<template>
<div>
  <Navbar></Navbar>
  <div class="container container-login-register">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Iniciar Sesión</div>
          <div class="card-body">
            <form class="col s12" @submit.prevent="authenticate">
              <!--h2 class="form-signin-heading">Please sign in</h2-->
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group row">
                <label for="inputUsername" class="col-sm-4 col-form-label text-md-right">Usuario</label>
                <div class="col-md-6">
                  <input v-model="username" type="username" id="inputUsername" class="form-control" placeholder="Nombre de usuario" required autofocus>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-md-4 col-form-label text-md-right">Contraseña</label>
                <div class="col-md-6">
                  <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4 button-iniciar-sesion">
                  <button type="submit" class="btn btn-primary row">Iniciar Sesión</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { EventBus } from '@/utils'
import Navbar from '@/components/Navbar'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  computed: {
    ...mapState('', ['user'])
  },
  methods: {
    authenticate () {
      this.$store.dispatch('login', { 
        username: this.username, 
        password: this.password
        })
        .then((response) => {
          this.$router.push('/')
          })
          .then((response) => console.log("Registro auditoria"))
        .catch(() => this.error ="Fallo")
    }
  },
  mounted () {
    /*EventBus.$on('failedRegistering', (msg) => {
      this.errorMsg = msg
    })*/
    if (localStorage.getItem('user')){
      //localStorage.removeItem('username');
      localStorage.removeItem('user');
    }
    EventBus.$on('failedAuthentication', (msg) => {
      this.error = msg
    })
  },
  beforeDestroy () {
    //EventBus.$off('failedRegistering')
    EventBus.$off('failedAuthentication')
  }
}
</script>

<style>
.container-login-register {
  padding-top: 10%;
}
.button-iniciar-sesion {
      margin-left: 35.5%;
}
</style>
