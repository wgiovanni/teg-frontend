<template>
    <main role="main" class="col-md-9">
        <div class="container col-md-4 ">
               
            <!--New :show="showModal" @close="showModal = false"></New-->
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
                    <Edit :show="showModalEdit" @close="showModal = false"></Edit>
                    <td><!--button
                        type="button"
                        class="btn btn-warning btn-sm"
                        @click="showModalEdit = true">
                        <i class="material-icons">edit</i>
                        </button-->
                        <button 
                        class="btn btn-warning btn-sm"
                        id="show-modal" 
                        @click="showModalEdit = true">
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

import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'

export default {
  name: 'BodyUser',
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
      console.log(req)
      this.users = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    loginFailed () {
      this.error = 'Login failed!'
      console.log("Error Login")
    },
    handler () {

    }
  },
  created() {
      this.usersAll();
  }
}
</script>
