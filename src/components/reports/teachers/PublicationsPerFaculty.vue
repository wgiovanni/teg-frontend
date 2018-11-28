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
      <div class="card border-teachers mb-6 text-center col-md-3 col-xs-1 p-l-0 p-r-0">
        <div class="card-header">        
            <h5 class="card-tile text-dark">Docentes</h5>         
        </div>
        <div id="collapseFIRST" class="collapse show" data-parent="#accordion">
          <div class="card-body text-center">
            <table class="table table-hover group">
              <tbody>
                <tr>
                  <router-link to="/report/TeachersWithAPhDPerFaculty" class="text-dark"><td class="td-table">Docentes con Doctorado por Facultad</td></router-link>    
                </tr>
                <tr>
                  <router-link to="/report/TeachersNationalityFaculty" class="text-dark"><td class="td-table">Docentes Extranjeros por Facultad</td></router-link>    
                </tr>
                    <tr>
                  <router-link to="/report/ProportionOfTeachersByRank" class="text-dark"><td class="td-table">Docentes por Escalafón</td></router-link>    
                </tr>
                <tr>
                  <router-link to="/report/TeachersSexFaculty" class="text-dark"><td class="td-table">Docentes por Sexo</td></router-link>    
                </tr>               
                <tr>
                  <td class="td-table teachers-color">Publicaciones por Facultad</td>   
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
                  <router-link to="/report/CitationsPerFaculty" class="text-dark"><td>Citaciones por Facultad</td></router-link>     
                </tr>
                <tr>
                  <router-link to="/report/StaffWithAPhD" class="text-dark"><td>Docentes con Doctorado</td></router-link>    
                </tr>  
                <tr>
                  <router-link to="/report/ProportionOfInternationalFaculty" class="text-dark"><td>Docentes Extranjeros</td></router-link>    
                </tr> 
                <tr>
                  <router-link to="/report/PublicationsPerTeacher" class="text-dark"><td>Publicaciones por Docente</td></router-link> 
                </tr>          
                <tr>
                  <router-link to="/report/FacultyStudentRatioTeacher" class="text-dark"><td>Docentes Empleados / Estudiantes Matriculados</td></router-link>    
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
.teachers-color {
  color: #fff;
  background-color: #337f6e;
  font-weight: bold;
}

.teachers-color:hover{
   background-color: #006d55;
}

.border-teachers {
  border-left-color: #006d55;
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

var reportName = "Publicaciones por Facultad";
var img;
var info = []; //Saves data for verification
var saved = [];
var date = new Date();

export default {
  mounted() {
    document.getElementById("report").innerHTML = reportName;
    img = document.getElementById("jpg-export"); // Gets image

    },

  data() {
    return {
      data: []
    };
  },

  created() {
    this.load();
  },

  methods: {

    
     load() {
      const path = "http://127.0.0.1:5000/api/v1/profesor-publicacion-facultad";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {    

      var datos = []; // Saves data from JSON
      var facultades = [];
      var numPublicaciones = [];
      var nombreFacultad = [];
      var i;
      var size = req.data.length;
      var d = req.data;

       // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",
        nombre: "Nombre",
        apellido: "Apellido",
        correo: "Correo",
        area_de_investigacion: "Área de Investigación",
        publicacion: "Publicación",
        url_citacion: "Link a Citación",
        url_publicacion: "Link a Publicación",
        numero_citas: "Número de Citas",
        facultad: "Facultad"
      });
      console.log("info ", info);

      saved = d["recuperado"];


      facultades = d["facultades"];

      for (i = 0; i < 7; i++) {
        nombreFacultad.push(facultades[i]["facultad"]);
        numPublicaciones.push(facultades[i]["cantidad_publicaciones"]);
      }

    
      console.log(nombreFacultad);
      console.log(numPublicaciones);

      datos.push({
        x: nombreFacultad,
        y: numPublicaciones,
        name: "Cantidad de Publicaciones",
        type: "bar",
        marker: { color: "#badc58" },
        hoverlabel: { font:{size:18}},
        insidetextfont: {color: "#FFFFFF", 
                         size: 16,                                         
                         }
      });


      console.log(datos);
      this.data = datos;

      // LAYOUT

      var layout = {
        //title:"",
        //titlefont:{size: 24}, 
        //annotations: [{}],             
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },
        editable: false,
        autosize: true,
        responsive: true,
        margin: {
          l: 200,
          r: 200,
          b: 150,
          t: 100,
          pad: -1
        },
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

      //Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.react(this.$refs.bar, this.data, layout, config).then(function(gd) {
        //Saves plot as image
        gd.on("plotly_legendclick", () => false);

        Plotly.toImage(gd, {height: 768, width: 1024}).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",       
            height: 768,
            width: 1024,
          })
        });
      });//plotly_plot

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
      doc.addImage(img, "JPG", 20, 18);

      
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
      doc.setFontSize(7);
      doc.cellInitialize();


      $.each(info, function(i, row) {
       
          $.each(row, function(j, cell) {
            if (cell != "Publicación" & cell!="Link a Citación" & cell!="Link a Publicación") {
              if(j!="publicacion" & j!="url_citacion" & j!="url_publicacion"){
                if (j == "facultad" | j =="correo") {
                  doc.cell(10, 25, 60, 15, cell, i);
                } else if (j == "area_de_investigacion") {
                  doc.cell(10, 25, 40, 15, cell, i);
                } else if (j == "cedula" | j == "numero_citas") {
                  doc.cell(10, 25, 25, 15, cell, i);
                } else{
                  doc.cell(10, 25, 35, 15, cell, i);
                }
              }
            }
          });
      
      });

      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontSize(8);
      doc.setFontType("bold");
      doc.text("* Para ver más información sobre las publicaciones que fueron citadas por favor descargar archivo en formato Excel (.xlsx)", 15, 15);

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
        { wch: 10 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
        { wch: 30 },
        { wch: 50 },
        { wch: 50 },
        { wch: 50 },
        { wch: 20 },
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