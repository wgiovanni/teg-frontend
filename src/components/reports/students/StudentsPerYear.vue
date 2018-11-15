<template>
    <div>
        <form class="col s12"  @submit.prevent="getStudent">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group row">
                <label for="inputFrom" class="col-sm-1 col-form-label">Desde</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="desde">
                        <option value="">Seleccionar año desde</option>
                        <option v-for="year in arrayDateFrom" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>

                <label for="inputTo" class="col-sm-1 col-form-label">Hasta</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="hasta">
                        <option value="">Seleccionar año hasta</option>
                        <option v-for="year in arrayDateTo" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>
                <div class="col-sm-1">
                    <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentsPerYear',
  data () {
      return {
          desde: '',
          hasta: '',
          arrayDateFrom: [],
          arrayDateTo: [], 
          error: ''
      }
  },
  methods: {
    getStudent: function () {
        const path = 'http://localhost:5000/api/v1/estudiantes-ano';
        console.log(this.desde);
        console.log(this.hasta);
        this.error = '';
        if (this.desde < this.hasta || this.desde == "" || this.hasta == "") {
            axios.post(path, { 
                desde: this.desde, 
                hasta: this.hasta
            })
                .then(request => this.successful(request))
                .catch(() => this.failed())
        } else {
            console.log("Error no se puede hacer la consulta");
            this.error = "Error no se puede hacer la consulta";
        }
    
    },
    successful (req) {
        //aqui haras la grafica
        console.log(req.data)
    },
    failed () {
        this.error = 'Fallo estudiantes por año!'
    },
    getYears() {
        const path = 'http://localhost:5000/api/v1/year';
        axios.get(path)
        .then(request => this.yearSuccess(request))
        .catch(() => this.yearFailed())
    },
    yearSuccess (req) {
      this.arrayDateFrom = req.data;
      this.arrayDateTo = req.data;
    },
    yearFailed () {
      this.error = 'Fallo busqueda en Años!'
    },
  },
  created() {
      this.getYears();
  },
}
</script>

