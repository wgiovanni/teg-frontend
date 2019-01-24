<template>
    <div class="container-fluid" style="margin-top: 7%;">
        <div v-if="loading==true" class="d-flex justify-content-center">
            <Spinner></Spinner>
        </div>
        <div v-else class="table-responsive-md">
            <div><h2>Monitoreo de errores de microservicios</h2></div>
            <div class="row" style="margin-left: 0px">
                
                <input v-model="search" name="search" type="text" id="search" class="form-control col-3" placeholder="Buscar">
                <div v-if="this.task==true" class="col text-rigth" style="text-align: right;">
                    <button class="btn btn-secondary" v-on:click="taskActive(false)"><i class="fas fa-pause"></i> Detener tarea programada</button>
                    <button class="btn btn-success" v-on:click="createPDF()"><i class="fas fa-file-pdf"></i> Exportar PDF</button>
                    <button class="btn btn-danger float-right" v-on:click="clear()"><i class="fas fa-broom"></i> Limpiar</button>
                </div>
                <div v-if="this.task==false" class="col text-rigth" style="text-align: right;">
                    <button class="btn btn-secondary" v-on:click="taskActive(true)"><i class="fas fa-play"></i> Activar tarea programada</button>
                    <button class="btn btn-success" v-on:click="createPDF()"><i class="fas fa-file-pdf"></i> Exportar PDF</button>
                    <button class="btn btn-danger float-right" v-on:click="clear()"><i class="fas fa-broom"></i> Limpiar</button>
                </div>
            </div>
            
            <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Mensaje de error</th>
                        <th scope="col">Tipo de error</th>
                        <th scope="col">URL del microservicio</th>
                        <th scope="col">Fecha</th>
                        <!-- <th scope="col">Fecha</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="audit in filteredAudit" :key="audit.id">
                        <td>{{ audit.message }}</td>
                        <td><i class="fas fa-exclamation-circle" style="color:red"></i> {{ audit.type }}</td>
                        <td>{{ audit.endpoint }}</td>
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
import { URL_INTEGRATION } from '@/common/constants'
import jsPDF from "jsPDF";


// var info = [];
var date = new Date();

export default {
  name: 'MicroservicesError',
  components: {
      Spinner
  },
  data() {
      return {
          microservicesError: [],
          loading: true,
          search: '',
          error: false,
          task: true
      };  
  },
  methods: {
    auditsAll () {
      const path = URL_INTEGRATION + '/microservices';
      this.loading = true;
      axios.get(path)
       .then(request => this.auditSuccessful(request))
        .catch(() => this.auditFailed())
    },
    auditSuccessful (req) {
        console.log(req);
        this.loading = false;
        this.microservicesError = req.data;
        // var size = req.data.length;
        // var d = req.data;
        
    },
    auditFailed () {
        this.error = 'Fallo Auditoría';
    },
    clear(){
        const path = URL_INTEGRATION + '/microservices';
        // this.loading = true;
        axios.delete(path)
        .then(request => {
            console.log(request);
            this.error = request.data.message;
            // this.loading = false;
            this.microservicesError = []
         })
            .catch(() => {this.error = "Fallo eliminación"})
    },
    createPDF () {
        var info = this.microservicesError;
        info.unshift({
            id: "ID",
            message: "Mensaje de error",
            type: "Tipo de error",
            endpoint: "URL",
            date: "Fecha"
        });
        console.log("info ", info);
        var doc = new jsPDF("l", "mm", "a4");

        doc.setProperties({
            title: "Errores de microservicios",
            subject: "Errores de microservicios",
            author: "UC Ranking",
            date: date
        });

        doc.setFont("helvetica");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.text("Monitoreo de errores de microservicios", 15, 15);

        // doc.text("Mensaje de error", 5, 20);

        // Table
        doc.setFontSize(6);
        doc.cellInitialize();

        $.each(info, function(i, row) {
            $.each(row, function(j, cell) {
            if ((cell != "ID")) {
                if ((j != "id")) {
                    if ((j == "message")) {
                        doc.cell(5, 25, 150, 15, cell, i);
                    } else if (j == "endpoint") {
                    
                        doc.cell(5, 25, 60, 15, cell, i);
                    
                    } else {
                            doc.cell(5, 25, 30, 15, cell, i);
                        
                }}
            }
            });
        });
        doc.save("MicroservicesError" + ".pdf");
        info = [];
        this.microservicesError.shift();
    },
    getTask() {
        const path = URL_INTEGRATION + '/taskScheduler';
        // this.loading = true;
        console.log("get "+ this.task);
        axios.get(path)
        .then(request => {
            if (request.data.definicion == "0")
                this.task = false;
            else
                this.task = true;
            })
            .catch(() => {console.log("Error buscando tarea programada")})
    },
    taskActive(active) {
        const path = URL_INTEGRATION + '/taskScheduler';
        // this.loading = true;
        console.log("entro "+ this.task);
        axios.post(path, {
            "active": active
        })
        .then(request => {
            if (request.data.definicion == "0")
                this.task = false;
            else
                this.task = true;
            })
            .catch(() => {console.log("Error buscando tarea programada")})
    }
  },
  created() {
      this.auditsAll();
      this.getTask();
  },
  mounted() {
    this.auditsAll();
    this.getTask();
  },
  computed: {
      filteredAudit: function () {
          return this.microservicesError.filter((microservices) => {
              return microservices.message.match(this.search) ||
              microservices.type.match(this.search) || 
              microservices.endpoint.match(this.search) ||
              microservices.date.match(this.search)
          })
      }
  }
  
}
</script>
