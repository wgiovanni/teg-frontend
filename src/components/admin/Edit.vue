<template>
    <div>
        <div class="container">
            <form class="col s12" @submit.prevent="savePost">
              <!--h2 class="form-signin-heading">Please sign in</h2-->
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group row">
                <label for="first_name" class="col-sm-4 col-form-label text-md-right">Nombre</label>
                <div class="col-md-6">
                  <input v-model="first_name" type="text" id="first_name" class="form-control" placeholder="Nombre" required>
                </div>
              </div>
              <!--div class="form-group">
                <label for="first_name">Nombre</label>
                <input type="text" class="form-control" id="first_name" placeholder="Nombre" required>
              </div-->             
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

export default {
  name: 'Edit',
   data () {
    return {
        id: this.$route.params.id,
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        error: false,
    }
  },
   methods: {
    savePost: function () {
    const path = 'http://localhost:5000/user' + '/' + this.id;
    axios.put(path, { first_name: this.first_name, last_name: this.last_name, email: this.email, password: this.password })
        .then(request => this.userSuccessful(request))
        .catch(() => this.userFailed())
    },
    save () {
    
    },
    userSuccessful (req) {
    console.log(this.first_name)
    console.log(this.last_name)
    console.log(this.email)
    console.log(this.password)
    console.log(req)
    //this.$parent.usersAll(); //Esta linea actualiza la tabla de usuarios en caso de que se ingrese un nuevo usuario.
    this.$router.replace(this.$route.query.redirect || '/admin')
    },
    userFailed () {
    this.error = 'User failed!'
    console.log("User Login")
    /*this.$store.dispatch('logout')
    delete localStorage.*/
    },
    findById () {
        console.log(this.id);
        const path = 'http://localhost:5000/user'.concat('/' + this.id);
        console.log(path);
        axios.get(path)
        .then(request => this.findByIdSuccess(request))
        .catch(() => console.log("Error Login"))
    },
    findByIdSuccess(request) {
        console.log(request)
        this.id = request.data.id;
        this.first_name = request.data.first_name;
        this.last_name = request.data.last_name;
        this.email = request.data.email;
        this.password = request.data.password;
        console.log(this.first_name)
        console.log(this.last_name)
        console.log(this.email)
        console.log(this.password)
        
    }
  },
  created () {
      this.findById();
  }
}
</script>
