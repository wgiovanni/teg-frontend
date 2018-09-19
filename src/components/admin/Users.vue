<template>
    <div class="container col-md-4 ">
        <router-link to="/admin/new" tag="button" class="btn btn-primary">
          <i class="material-icons">add</i>
        </router-link>
        <table class="table border border-primary">
          <thead class="thead-dark">
              <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Role</th>
                  <th scope="col">Acciones</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in users" :key="user.id">
                  <td>{{ user.first_name }}</td>
                  <td>{{ user.last_name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.name }}</td> <!--El nombre del role-->
                  <td>
                    <router-link :to="`/admin/edit/${user.id}`" tag="button" class="btn btn-warning">
                      <i class="material-icons">edit</i>
                    </router-link>
                  </td>
                  <td>
                    <router-link :to="`/admin/delete/${user.id}`" tag="button" class="btn btn-danger">
                      <i class="material-icons">delete</i>
                    </router-link>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';

import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'

export default {
  name: 'List',
  components: {
      New,
      Edit
  },
  data() {
      return {
          users: [],
          showModal: false,
          showModalEdit: false
      };  
  },
  methods: {
    usersAll () {
      const path = 'http://localhost:5000/user';
      axios.get(path)
       .then(request => this.userSuccessful(request))
        .catch(() => this.loginFailed())
    },
    userSuccessful (req) {
      this.users = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    loginFailed () {
      this.error = 'User failed!'
    },
  },
  created() {
      this.usersAll();
  }
}
</script>

