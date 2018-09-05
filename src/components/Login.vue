<template>
<div class="container-fluid">
  <Navbar></Navbar>
  <div class="container container-login-register">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Iniciar Sesión</div>
          <div class="card-body">
            <form class="col s12" @submit.prevent="login">
              <!--h2 class="form-signin-heading">Please sign in</h2-->
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-4 col-form-label text-md-right">Correo Electrónico</label>
                <div class="col-md-6">
                  <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Correo Electrónico" required autofocus>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-md-4 col-form-label text-md-right">Contraseña</label>
                <div class="col-md-6">
                  <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button class="btn btn-primary row" type="submit">Iniciar Sesión</button>
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
import axios from 'axios';

import Navbar from '@/components/Navbar'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    /*login () {
      console.log(this.email)
      console.log(this.password)
    },*/
    login () {
      const path = 'http://localhost:5000/auth';
      axios.post(path, { email: this.email, password: this.password })
       .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      /*if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')*/
      console.log(this.email)
      console.log(this.password)
      console.log(req)
      this.$router.replace(this.$route.query.redirect || '/authors')
    },
    loginFailed () {
      this.error = 'Login failed!'
      console.log("Error Login")
      /*this.$store.dispatch('logout')
      delete localStorage.*/
    }
  }
}
</script>

<style>
.container-login-register {
  padding-top: 10%;
}
</style>
