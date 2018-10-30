<template>
    <div class="container-fluid">
        <!--router-link to="/admin/new" tag="button" class="btn btn-primary">
          <i class="material-icons">add</i>
        </router-link-->
        <table class="table border border-primary">
          <thead class="thead-dark">
              <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Definición</th>
                  <th scope="col">Acciones</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="systemParameter in systemParameters" :key="systemParameter.id">
                  <td>{{ systemParameter.codigo }}</td>
                  <td>{{ systemParameter.nombre }}</td>
                  <td>{{ systemParameter.descripcion }}</td>
                  <td>{{ systemParameter.definicion }}</td>
                  <td>
                    <router-link :to="`/integration/edit/${systemParameter.id}`" tag="button" class="btn btn-warning">
                      <i class="material-icons">edit</i>
                    </router-link>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';

//import New from '@/components/admin/New'
//import Edit from '@/components/admin/Edit'

export default {
  name: 'SystemParameterList',
  components: {
      /*New,
      Edit*/
  },
  data() {
      return {
          systemParameters: [],
          showModal: false,
          showModalEdit: false
      };  
  },
  methods: {
    systemParameterAll () {
      const path = 'http://localhost:5000/parametroSistema';
      axios.get(path)
       .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
      this.systemParameters = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    failed () {
      this.error = 'System Parameter failed!'
    },
  },
  created() {
      this.systemParameterAll();
  }
}
</script>

