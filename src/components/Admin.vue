<template>
    <div>
        <Header :myProp="items"></Header>
        <div class="container">
            <form class="col s12" @submit.prevent="save">
              <!--h2 class="form-signin-heading">Please sign in</h2-->
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group row">
                <label for="first_name" class="col-sm-4 col-form-label text-md-right">Nombre</label>
                <div class="col-md-6">
                  <input v-model="first_name" type="text" id="first_name" class="form-control" placeholder="Nombre" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="last_name" class="col-sm-4 col-form-label text-md-right">Apellido</label>
                <div class="col-md-6">
                  <input v-model="last_name" type="text" id="last_name" class="form-control" placeholder="Apellido" required>
                </div>
              </div>
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
                  <button class="btn btn-primary row" type="submit">Guardar</button>
                </div>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Header from '@/components/Header'

export default {
  name: 'Admin',
  components: {
    Header
  },
   data () {
    return {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
		error: false, 
		items: 'Estudiantes'		
    }
  },
  methods: {
    /*login () {
      console.log(this.email)
      console.log(this.password)
    },*/
    save () {
      const path = 'http://localhost:5000/user';
      axios.post(path, { first_name: this.first_name, last_name: this.last_name, email: this.email, password: this.password })
       .then(request => this.userSuccessful(request))
        .catch(() => this.userFailed())
    },
    userSuccessful (req) {
      /*if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
	  this.$store.dispatch('login')*/
	  console.log(this.first_name)
      console.log(this.last_name)
      console.log(this.email)
      console.log(this.password)
      console.log(req)
      this.$router.replace(this.$route.query.redirect || '/prueba')
    },
    userFailed () {
      this.error = 'User failed!'
      console.log("User Login")
      /*this.$store.dispatch('logout')
      delete localStorage.*/
    }
  }
}
</script>