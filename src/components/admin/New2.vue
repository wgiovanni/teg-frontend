<template>
    <div>
        <div class="container">
            <form class="col s12" @submit.prevent="savePost">
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
                <label for="username" class="col-sm-4 col-form-label text-md-right">Nombre de usuario</label>
                <div class="col-md-6">
                  <input v-model="username" type="text" id="username" class="form-control" placeholder="Nombre de usuario" required>
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
              <div class="form-group row">
                <label for="inputRole" class="col-md-4 col-form-label text-md-right">Role</label>
                <div class="col-md-6">
                  <select class="form-control" :required="true" v-model="id_role">
                    <option disabled value="">Seleccionar Role</option>
                    <option v-for="role in roles" :key="role.id" v-bind:value="role.id">{{ role.name }}</option>
                  </select>
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
  name: 'New2',
   data () {
    return {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        id_role:'',
		    error: false, 
        roles: []
    }
  },
   methods: {
    savePost: function () {
    const path = 'http://localhost:5000/user';
    axios.post(path, { 
      first_name: this.first_name, 
      last_name: this.last_name, 
      username: this.username, 
      email: this.email, 
      password: this.password, 
      id_role: this.id_role 
      })
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
    roleAll () {
      const path = 'http://localhost:5000/role';
      axios.get(path)
       .then(request => this.roleSuccessful(request))
        .catch(() => this.roleFailed())
    },
    roleSuccessful (req) {
      console.log(req)
      this.roles = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    roleFailed () {
      this.error = 'Role failed!'
      console.log("Error Role")
    },
  },
  created() {
      this.roleAll();
  }
}
</script>
