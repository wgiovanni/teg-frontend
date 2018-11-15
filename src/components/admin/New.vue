<template>
    <div>
        <div class="container margen">
          <div class="col s12"><h2>Nuevo usuario</h2></div>
            <form class="col s12" @submit.prevent="savePost">
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group">
                <label for="first_name">Nombre</label>
                <input v-model="first_name" type="text" id="first_name" class="form-control" placeholder="Nombre" required>
              </div>
              <div class="form-group">
                <label for="last_name">Apellido</label>
                <input v-model="last_name" type="text" id="last_name" class="form-control" placeholder="Apellido" required>
              </div>
              <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input v-model="username" type="text" id="username" class="form-control" placeholder="Nombre de usuario" required>
              </div>
              <div class="form-group">
                <label for="inputEmail">Correo Electrónico</label>
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Correo Electrónico" required autofocus>
              </div>
              <div class="form-group">
                <label for="inputPhone">Teléfono</label>
                <input v-model="phone" type="text" id="inputPhone" class="form-control" placeholder="Teléfono" required>
              </div>
              <div class="form-group">
                <label for="inputAddress">Dirección</label>
                <textarea v-model="address" class="form-control" id="address" rows="3" required></textarea>
              </div>
              <div class="form-group">
                <label for="inputPassword">Contraseña</label>
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
              </div>
              <div class="form-group">
                <label for="inputRole">Role</label>
                <select class="form-control" v-model="id_role">
                  <option disabled value="">Seleccionar Role</option>
                  <option v-for="role in roles" :key="role.id" v-bind:value="role.id">{{ role.name }}</option>
                </select>
              </div>
                
              <div class="form-group row col-md-8">
                <div>
                  <!--a class="btn btn-danger margin" style="margin-right: 8px;" type="button" href="/admin">Cancelar</a-->
                   <router-link to="/admin" tag="button" style="margin-right: 8px;" class="btn btn-danger">
                   Cancelar
                  </router-link>
                </div>
                <div>
                  <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Spinner from '@/components/Spinner'
import { mapState, mapGetters } from "vuex";

export default {
  name: 'New',
  components: {
    Spinner
  },
   data () {
    return {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        id_role: '',
		    error: false, 
        roles: [],
        loading: false
    }
  },
   methods: {
    savePost: function () {
    const path = 'http://localhost:8084/api/v1/user';
    //this.loading = true;
    axios.post(path, { 
      first_name: this.first_name, 
      last_name: this.last_name, 
      username: this.username, 
      email: this.email,
      phone: this.phone,
      address: this.address, 
      password: this.password, 
      id_role: this.id_role,
      user: this.user.username
      })
        .then(request => this.userSuccessful(request))
        .catch(() => this.userFailed())
    },
    userSuccessful (req) {
    //this.$parent.usersAll(); //Esta linea actualiza la tabla de usuarios en caso de que se ingrese un nuevo usuario.
    //loading = false
    this.$router.replace(this.$route.query.redirect || '/admin')
    },
    userFailed () {
    this.error = 'User failed!'
    },
    roleAll () {
      const path = 'http://localhost:8084/api/v1/role';
      this.loading = true;
      axios.get(path)
       .then(request => this.roleSuccessful(request))
        .catch(() => this.roleFailed())
    },
    roleSuccessful (req) {
      this.loading = false;
      this.roles = req.data;
    },
    roleFailed () {
      this.error = 'Role failed!'
    },
  },
  created() {
      this.roleAll();
  },
  computed: {
    ...mapGetters(["user"])
  }
}
</script>