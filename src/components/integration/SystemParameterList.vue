<template>
    <div class="container-fluid margen">
        <div v-if="loading==true">
            <Spinner></Spinner>
        </div>
        <div v-else>
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
  </div>
</template>

<script>
import axios from 'axios';

//import New from '@/components/admin/New'
//import Edit from '@/components/admin/Edit'
import Spinner from '@/components/Spinner'

export default {
  name: 'SystemParameterList',
  components: {
      /*New,
      Edit*/
      Spinner
  },
  data() {
      return {
          systemParameters: [],
          loading: true
      };  
  },
  methods: {
    systemParameterAll () {
      const path = 'http://localhost:5000/api/v1/parametroSistema';
      this.loading = true; 
      axios.get(path)
       .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
        this.loading = false;
        this.systemParameters = req.data;
        //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    failed () {
      this.error = 'System Parameter failed!'
    }
  },
  created() {
      this.systemParameterAll();
  },
  mounted() {
      this.systemParameterAll();
  }
}
</script>
<style>
.margen {
    margin-top: 5%;    
}
</style>


