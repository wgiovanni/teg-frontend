<template>
    <main role="main" class="col-md-9">
        <div class="container col-md-2 ">
               
            <UsersNew :show="showModal" @close="showModal = false"></UsersNew>
            <button class="btn btn-primary" id="show-modal" @click="showModal = true">Nuevo Usuario</button>
            <table class="table border border-primary">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Usuarios</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.email}}</td>
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
