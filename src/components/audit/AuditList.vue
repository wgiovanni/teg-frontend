<template>
    <div class="container-fluid margen">
        <div v-if="loading==true" class="d-flex justify-content-center">
            <Spinner></Spinner>
        </div>
        <div v-else class="table-responsive-md">
            <div><h2>Auditoría</h2></div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Módulo</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="audit in audits" :key="audit.id">
                        <td>{{ audit.username }}</td>
                        <td>{{ audit.action }}</td>
                        <td>{{ audit.module }}</td>
                        <td>{{ audit.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

import Spinner from '@/components/Spinner'

export default {
  name: 'AuditList',
  components: {
      Spinner
  },
  data() {
      return {
          audits: [],
          loading: true
      };  
  },
  methods: {
    auditsAll () {
      const path = 'http://localhost:8084/api/v1/historyaction';
      this.loading = true;
      axios.get(path)
       .then(request => this.auditSuccessful(request))
        .catch(() => this.auditFailed())
    },
    auditSuccessful (req) {
        console.log(req);
      this.loading = false;
      this.audits = req.data;
    },
    auditFailed () {
      this.error = 'Fallo Auditoría'
    },
  },
  created() {
      this.auditsAll();
  },
  mounted() {
    this.auditsAll();
  }
  
}
</script>
