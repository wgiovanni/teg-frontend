<template>
    <div class="container-fluid" style="margin-top:8%;">
        <form class="col s12"  @submit.prevent="getGraduates">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group row">
                <label for="inputFrom" class="col-sm-1 col-form-label">Facultad</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="facultad" required>
                        <option value="">Seleccionar facultad</option>
                        <option v-for="facultad in facultades" :key="facultad.id" v-bind:value="facultad.id">{{ facultad.nombre }} ({{facultad.codigo}})</option>
                    </select>
                </div>
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
  name: 'GraduateYearFaculty',
  data () {
      return {
          desde: '',
          hasta: '',
          arrayDateFrom: [],
          arrayDateTo: [], 
          error: '',
          facultad: '',
          facultades: []
      }
  },
  methods: {
    getGraduates: function () {
        const path = 'http://localhost:5000/api/v1/egresado-ano-facultad';
        console.log(this.desde);
        console.log(this.hasta);
        console.log(this.facultad)
        this.error = '';
        if (this.desde < this.hasta || this.desde == "" || this.hasta == "") {
            axios.post(path, { 
                desde: this.desde, 
                hasta: this.hasta, 
                facultad: this.facultad
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
        this.error = 'Fallo estudiantes por facultad y por año!'
    },
    getYears() {
        const path = 'http://localhost:5000/api/v1/year';
        this.error = '';
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
    getFaculty() {
        const path = 'http://localhost:5000/api/v1/faculty';
        this.error = '';
        axios.get(path)
        .then(request => this.facultySuccess(request))
        .catch(() => this.facultyFailed())
    },
    facultySuccess (req) {
        this.facultades = req.data;
    },
    facultyFailed () {
        this.error = 'Fallo busqueda en facultad!'
    }
  },
  created() {
      this.getYears();
      this.getFaculty();
  },
}
</script>