<template>
    <main role="main" class="col-md-9">
        <div class="container col-md-4 ">
               
            <UsersNew :show="showModal" @close="showModal = false"></UsersNew>
            <button class="btn btn-default" id="show-modal" @click="showModal = true"><i class="material-icons">add</i></button>
            <table class="table border border-primary">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Acciones</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td><button
                        type="button"
                        class="btn btn-warning btn-sm"
                        v-b-modal.book-update-modal
                        @click="editBook(book)">
                        <i class="material-icons">edit</i>
                        </button>
                    </td>
                    <td><button
                        type="button"
                        class="btn btn-danger btn-sm"
                        @click="onDeleteBook(book)">
                        <i class="material-icons">delete</i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

import UsersNew from '@/components/UsersNew'

export default {
  name: 'BodyUser',
  components: {
      UsersNew
  },
  data() {
      return {
          users: [],
          showModal: false
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
      console.log(req)
      this.users = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    loginFailed () {
      this.error = 'Login failed!'
      console.log("Error Login")
    }
  },
  created() {
      this.usersAll();
  }
}
</script>
