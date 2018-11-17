<template>
   <div class="row row-view">
    <!--GRAPH-->
    <!--Title-->  
    <div id="graph" class="col-md-9 col-xs-11 p-l-2 p-t-2">
    <h1 id="report" class="title"/>  
  

    <!--Plotly-->
    <div ref="bar" class="vue-plotly"/>
      
     <!--Download buttons--> 
      <div class="col-md-12 text-center">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        
        <button class="button button-pdf" @click="download_pdf"><i class="fa fa-file-pdf fa-lg"></i>   Descargar PDF</button>
        <button class="button button-img" @click="download_img"><i class="fa fa-file-image fa-lg"></i>   Descargar JPG</button>
        <button class="button button-excel" @click="download_excel"><i class="fa fa-file-excel fa-lg"></i>   Descargar Excel</button>        
      </div>
    <!--Return button-->
       <div class="col-md-16 text-center">
        <router-link to="/reports"><button class="button button-back">Regresar</button></router-link>        
      </div>  

    <!--Saves plot as image-->
    <img id="jpg-export" class="hidden"/>
    </div>
   

     <!--REPORTS LIST-->
      <div class="card border-students mb-6 text-center col-md-3 col-xs-1 p-l-0 p-r-0">
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
                  <td class="td-table students-color">Estudiantes Extranjeros por Facultad</td>  
                </tr>               
                <tr>
                  <router-link to="/report/StudentsEthnicGroupsPerFaculty" class="text-dark"><td class="td-table">Estudiantes Pertenecientes a Grupos Étnicos</td></router-link>    
                </tr>
                <tr>
                  <router-link to="/report/StudentsSexFaculty" class="text-dark"><td class="td-table">Estudiantes por Sexo</td></router-link>    
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
</template>


<style>
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

var reportName = "Estudiantes Extranjeros por Facultad";
var img;
var info = []; //Saves data for verification
var saved = [];
var date = new Date();

export default {
  mounted() {
    
    return {
      data: []
    };
  },

  created() {
    this.load();
  },

  methods: {
    load() {
      const path =
        "http://127.0.0.1:5000/api/v1/estudiantes-nacionalidad-facultad";

      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {

      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      var datos = []; // Saves data from JSON
      var nombreFacultad = [];
      var facultades = [];
      var estudiantesV = [];
      var estudiantesE = [];
      var i;
      var size = req.data.length;
      var d = req.data;
      

       // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",        
        nombre: "Nombre",
        apellido: "Apellido",
        email: "Correo",
        nacionalidad: "Nacionalidad",
        facultad: "Facultad"
      });
      console.log("info ", info);

      saved = d["recuperado"];


      facultades = d["facultades"];

      for (i = 0; i < 7; i++) {

        nombreFacultad.push(facultades[i]["facultad"]);
        estudiantesV.push(facultades[i]["venezolano"]);
        estudiantesE.push(facultades[i]["extranjero"]);
      }

      console.log(nombreFacultad);
      console.log(estudiantesV);
      console.log(estudiantesE);

      datos.push({
        x: nombreFacultad,
        y: estudiantesV,        
        name: "Estudiantes Venezolanos",
        type: "bar",
        marker: { color: "#006266" }
      });

      datos.push({
        x: nombreFacultad,
        y: estudiantesE,        
        name: "Estudiantes Extranjeros",
        type: "bar",
        marker: { color: "#8854d0" }
      });

      console.log(datos);
      this.data = datos;

      // LAYOUT

      var layout = {
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },
        editable: false,
        autosize: true,
        responsive: true,
        legend: {
          y: 0.8,
          font: {size: 16}
        },
        margin: {
          l: 200,
          r: 200,
          b: 150,
          t: 100,
          pad: -1
        }
        //width: 720,
        //height: 480,
      };

      var config = {
        displaylogo: false,
        displayModeBar: false,
        doubleClick: "reset+autosize",
        responsive: true
      };

      // GRAPH

      // Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.plot(this.$refs.bar, this.data, layout, config).then(function(gd) {
        //  Saves plot as image
        gd.on("plotly_legendclick", () => false);

        Plotly.toImage(gd, { height: 728, width: 1024 }).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",
            height: 728,
            width: 1024
          });
        });
      }); //plotly_plot
    }, //successful(req)

    failed() {
      this.error = "User failed!";
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

      //Info for verification
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text("Datos de Referencia", 15, 15);
      
      // Table
      doc.setFontSize(8);
      doc.cellInitialize();

      $.each(info, function(i, row) {
        $.each(row, function(j, cell) {
          if ((j == "email") | (j == "facultad")) {
            doc.cell(15, 25, 65, 15, cell, i);
          } else if (j == "nacionalidad") {
            doc.cell(15, 25, 35, 15, cell, i);
          } else if (j == "cedula") {
            doc.cell(15, 25, 25, 15, cell, i);
          } else {
            doc.cell(15, 25, 30, 15, cell, i);
          }
        });
      });

      //Saved from
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bolditalic");
      doc.setFontSize(16);
      doc.text("Recuperado de:", 15, 15);
      var j = 0;
      var aux = 15;

      for(j = 0; j < 4; j++){

        doc.setFontSize(14);
        doc.setFontType("bold");      
        aux = aux + 15;
        doc.text(saved[j]["first_name"], 15, aux);

        doc.setFontSize(10);         
        aux = aux + 5;
        doc.text(saved[j]["email"], 15, aux);
        aux = aux + 5;
        doc.text(saved[j]["phone"], 15, aux);
        aux = aux + 5;
        doc.text(saved[j]["address"], 15, aux);  
        aux = aux + 5;      
      }

        aux = 15;

       for(j = 4; j < 7; j++){

        doc.setFontSize(14);
        doc.setFontType("bold");      
        aux = aux + 15;
        doc.text(saved[j]["first_name"], 150, aux);

        doc.setFontSize(10);         
        aux = aux + 5;
        doc.text(saved[j]["email"], 150, aux);
        aux = aux + 5;
        doc.text(saved[j]["phone"], 150, aux);
        aux = aux + 5;
        doc.text(saved[j]["address"], 150, aux); 
        aux = aux + 5;       
      }

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
    
    download_excel() {
      // Data from JSON
      var ws = XLSX.utils.json_to_sheet(info, { skipHeader: true });

      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new(); // make Workbook of Excel

      // Workbook Properties
      wb.Props = {
        Title: reportName,
        Subject: "Reporte",
        Author: "UC Ranking",
        CreatedDate: date
      };

      // Column Properties
      var wscols = [
        { wch: 12 },        
        { wch: 20 },
        { wch: 20 },  
        { wch: 40 },
        { wch: 25 },
        { wch: 40 }
      ];
      ws["!cols"] = wscols;

      var wsrows = [{ hpt: 20 }];
      ws["!rows"] = wsrows;

      // add Worksheet to Workbook
      XLSX.utils.book_append_sheet(wb, ws, "Reporte");

      // export Excel file
      XLSX.writeFile(wb, reportName + ".xlsx");
    } //end_of_download

  }
};
</script>