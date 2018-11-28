<template>
<div>     
      
      <div class="row">
        
        <div class="col-xl-8 col-md-8 col-sm-12">

          <form class="col-md-10"  @submit.prevent="getStudent">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group form-row">
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Facultad</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="facultad" required>
                        <option value="">Seleccionar facultad</option>
                        <option v-for="facultad in facultades" :key="facultad.id" v-bind:value="facultad.id">{{ facultad.nombre }} ({{facultad.codigo}})</option>
                    </select>
                </div>
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Desde</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="desde">
                        <option value="">Seleccionar año desde</option>
                        <option v-for="year in arrayDateFrom" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>

                <label for="inputTo" class="col-sm-1 col-form-label text-form">Hasta</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="hasta">
                        <option value="">Seleccionar año hasta</option>
                        <option v-for="year in arrayDateTo" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <button type="submit" class="btn button-back">Buscar</button>
                </div>
            </div>
        </form>
        </div>
    </div> 


    <div class="row">
    
    <!--GRAPH-->
    <div class="col-md-9 col-xl-9"> 
        
        <!--Title-->
        <h1 id="report" class="col-md-12  title-customized"/>    
  
        <div id="graph">         

          <!--Plotly-->
          <div ref="scatter" class="vue-plotly"/> 

          <!--Download buttons--> 
          <div id="download-buttons" class="col-md-10 text-center" style="display: none">
                            
              <button class="button button-pdf" @click="download_pdf"><i class="fa fa-file-pdf fa-lg"></i>   Descargar PDF</button>
              <button class="button button-img" @click="download_img"><i class="fa fa-file-image fa-lg"></i>   Descargar JPG</button>
          </div>

          <!--Return button-->
          <div class="col-md-8 text-center">
            <router-link to="/reports"><button class="button button-back button-margin">Regresar</button></router-link>        
          </div>  

          <!--Saves plot as image-->
          <img id="jpg-export" class="hidden"/>
      </div><!--div id=graph-->  
      
    </div>
    <!--END OF GRAPH-->

        <!--REPORTS LIST-->
        <div class="card border-students text-center custom-margin col-xl-3 col-md-3 col-sm-12">
          <div class="card-header">        
              <h5 class="card-tile text-dark">Estudiantes</h5>         
          </div>
          <div id="collapseFIRST" class="collapse show" data-parent="#accordion">
            <div class="card-body text-center">
              <table class="table table-hover group">
                <tbody>                
                  <tr>
                    <router-link to="/report/UndergraduateStudentsNationality" class="text-dark"><td class="td-table">Estudiantes de Pregrado Extranjeros</td></router-link>    
                  </tr>
                  <tr>
                    <router-link to="/report/UndergraduateStudentsSex" class="text-dark"><td class="td-table">Estudiantes de Pregrado por Sexo</td></router-link>    
                  </tr>
                  <tr>
                    <router-link to="/report/StudentsDisabilityPerFaculty" class="text-dark"><td class="td-table">Estudiantes con Discapacidad</td></router-link>    
                  </tr>
                  <tr>
                    <router-link to="/report/ForeignStudentsPerFaculty" class="text-dark"><td class="td-table">Estudiantes Extranjeros por Facultad</td></router-link>    
                  </tr>                  
                  <tr>
                    <router-link to="/report/StudentsEthnicGroupsPerFaculty" class="text-dark"><td class="td-table">Estudiantes Pertenecientes a Grupos Étnicos</td></router-link>    
                  </tr>
                  <tr>
                    <router-link to="/report/StudentsSexFaculty" class="text-dark"><td class="td-table">Estudiantes por Sexo</td></router-link>    
                  </tr>
                  <tr>
                    <td class="td-table students-color">Estudiantes por Año</td>    
                  </tr>  
                  <tr>
                    <router-link to="/report/StudentsYearFaculty" class="text-dark"><td class="td-table">Estudiantes por Año y Facultad</td></router-link>   
                  </tr>                           
                </tbody>
              </table>
              <!--Ranking Reports-->
              <div class="card-header text-dark">
                <h6>Indicadores para el Ranking QS</h6>
              </div>
              <table class="table table-hover bg-light group">
                <tbody>        
                  <tr>
                    <router-link to="/report/ProportionOfInternationalStudents" class="text-dark"><td>Estudiantes Extranjeros</td></router-link>    
                  </tr>               
                  <tr>
                    <router-link to="/report/ProportionOfStudentsPerFaculty" class="text-dark"><td>Estudiantes por Facultad</td></router-link> 
                  </tr>
                  <tr>
                    <router-link to="/report/FacultyStudentRatioStudent" class="text-dark"><td>Docentes Empleados / Estudiantes Matriculados</td></router-link>    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!--END OF REPORT LIST-->
    </div>

    
</div>
</template>

<style>

.custom-list{
    margin-left: 60rem;
    margin-top: -10rem;
}

.title-customized{
    margin-top: -30rem;
    margin-left: 20rem;    
}

.vue-plotly {
    margin-left: 10rem;
}

.form-row{
    margin-top: 10rem;
}


.form-control:hover {
  border-color: gray;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px lightgray;
}

.form-control:active {
  border-color: gray;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px lightgray;
}

.form-control:focus {
  outline: 0;
}

.text-form {
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-right: 2rem;
  margin-left: 2px;
}

.students-color {
  color: #fff;
  background-color: #d8bd74;
  font-weight: bold;
}

.students-color:hover{
   background-color: #ccaa4c;
}

.border-students {
  border-left-color: #ccaa4c;
  min-height: 100%;
  border-width:2px !important;
}
</style>

<script>
import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";

var reportName = "Estudiantes Matriculados";
var img;
var info = []; //Saves data for verification
var date = new Date();

export default {
  name: "StudentsYearFaculty",
  data() {
    return {
      desde: "",
      hasta: "",
      arrayDateFrom: [],
      arrayDateTo: [],
      error: "",
      facultad: "",
      facultades: []
    };
  },
  methods: {
    getStudent: function() {
      const path = "http://localhost:5000/api/v1/estudiantes-ano-facultad";
      console.log(this.desde);
      console.log(this.hasta);
      console.log(this.facultad);
      this.error = "";
      if (this.desde < this.hasta || this.desde == "" || this.hasta == "") {
        axios
          .post(path, {
            desde: this.desde,
            hasta: this.hasta,
            facultad: this.facultad
          })
          .then(request => this.successful(request))
          .catch(() => this.failed());
      } else {
        console.log("Error no se puede hacer la consulta");
        this.error = "Error no se puede hacer la consulta";
      }
    },
    successful(req) {
      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      document.getElementById("download-buttons").style.display = "block";

      var datos = []; // Saves data from JSON
      var d = req.data;
      var size;
      var allYears = [];
      var years = [];
      var total = [];
      var i;

      allYears = d["anos"];
      size = allYears.length;
      console.log(allYears);
      console.log("size ", size);

      for (i = 0; i < size; i++) {
        years.push(allYears[i]["ano"]);
        total.push(allYears[i]["total"]);
      }

      console.log(years);
      console.log(total);

      datos.push({
        x: years,
        y: total,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: "#db0a5b" },        
        hoverlabel: { font:{size:18}},
      });

      this.data = datos;

      // LAYOUT

      var layout = {               
        editable: false,
        autosize: true,
        responsive: true,
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },       
        width: 720,
        //height: 480,
      };

      var config = {
        displaylogo: false,
        displayModeBar: false,
        doubleClick: "reset+autosize",
        responsive: true
      };

      // GRAPH

      //Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.react(this.$refs.scatter, this.data, layout, config).then(function(
        gd
      ) {
        //Saves plot as image
        gd.on("plotly_legendclick", () => false);

        Plotly.toImage(gd, { height: 768, width: 1024 }).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",
            height: 768,
            width: 1024
          });
        });
      }); //plotly_plot

      
    },

     download_pdf() {      
      var doc = new jsPDF("l", "mm", "a4");
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(20);
      doc.text(reportName, 15, 15);
      doc.addImage(img, "JPG", 20, 20);

      doc.setProperties({
        title: reportName,
        subject: "Reporte",
        author: "UC Ranking",
        date: date
      });

      doc.save(reportName + ".pdf");
    }, //end_of_download()

    download_img() {
      var a = document.createElement("a");
      a.href = img.src;
      a.download = reportName + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, //end_of_download()
    

    failed() {
      this.error = "Fallo estudiantes por facultad y por año!";
    },
    getYears() {
      const path = "http://localhost:5000/api/v1/year";
      this.error = "";
      axios
        .get(path)
        .then(request => this.yearSuccess(request))
        .catch(() => this.yearFailed());
    },
    yearSuccess(req) {
      this.arrayDateFrom = req.data;
      this.arrayDateTo = req.data;
    },
    yearFailed() {
      this.error = "Fallo busqueda en Años!";
    },
    getFaculty() {
      const path = "http://localhost:5000/api/v1/faculty";
      this.error = "";
      axios
        .get(path)
        .then(request => this.facultySuccess(request))
        .catch(() => this.facultyFailed());
    },
    facultySuccess(req) {
      this.facultades = req.data;
    },
    facultyFailed() {
      this.error = "Fallo busqueda en facultad!";
    }
  },
  created() {
    this.getYears();
    this.getFaculty();
  }
};
</script>