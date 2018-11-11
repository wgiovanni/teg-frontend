<template>
  <div>   
    <!--Title-->    
    <h1 id="report" class="title"/>    

    <!--Plotly-->
    <div ref="pie" class="vue-plotly"/>
      
    <!--Download buttons--> 
    <div class="row">  
      <div class="col-md-12 text-center">
        <button class="button" @click="download_pdf">Descargar PDF</button>
        <button class="button" @click="download_img">Descargar JPG</button>
        <button class="button" @click="download_excel">Descargar Excel</button>
      </div>
    </div>     

    <!--Saves plot as image-->
    <img id="jpg-export" class="hidden"/>

  </div>  
</template>


<style>
</style>


<script>
import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";

var reportName = "Proporción de Profesores con Doctorado o PhD";
var img;
var info = []; //Saves data for verification
var date = new Date();

export default {
  mounted() {},

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
      const path = "http://127.0.0.1:5000/api/v1/profesor-doctorado-proporcion";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {
      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      var datos = []; // Saves data from JSON
      var totalProfesores;
      var totalDoctorado;
      var total2;
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
        nivel: "Nivel"
      });

      console.log("info ", info);
      totalDoctorado = d["profesores-doctorado"];
      totalProfesores = d["total-profesores"];

      console.log(totalProfesores);
      console.log(totalDoctorado);

      total2 = totalProfesores - totalDoctorado;

      datos.push({
        values: [totalDoctorado, total2],
        labels: ["Profesores con Doctorado", "Profesores sin Doctorado"],
        type: "pie",
        marker: { colors: ["#ff9f43", "#54a0ff"] }
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
        margin: {
          l: 100,
          r: 130,
          b: 100,
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
      Plotly.plot(this.$refs.pie, this.data, layout, config).then(function(gd) {
        //  Saves plot as image
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
    }, //successful(req)

    failed() {
      this.error = "User failed!";
    },

    download_pdf() {
      var doc = new jsPDF("l", "mm", "a4");
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.text(reportName, 15, 15);
      doc.addImage(img, "JPG", 10, 10);

      doc.setProperties({
        title: reportName,
        subject: "Reporte",
        author: "Sistema Ranking",
        date: date
      });

      //Info for verification
      doc.addPage();
      doc.setFontSize(8);

      // Table
      doc.cellInitialize();

      $.each(info, function(i, row) {
        $.each(row, function(j, cell) {
          if ((j == "correo") | (j == "facultad")) {
            doc.cell(15, 10, 60, 15, cell, i);
          } else if (j == "cedula") {
            doc.cell(15, 10, 30, 15, cell, i);
          } else {
            doc.cell(15, 10, 45, 15, cell, i);
          }
        });
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

     download_excel() {
      // Data from JSON
      var ws = XLSX.utils.json_to_sheet(info, {skipHeader:true});

      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new(); // make Workbook of Excel

      // Workbook Properties
      wb.Props = {
        Title: reportName,
        Subject: "Reporte",
        Author: "Sistema Ranking",
        CreatedDate: date
      };

      // Column Properties
      var wscols = [
        { wch: 10 },
        { wch: 20 },
        { wch: 20 },    
        { wch: 40 },
        { wch: 30 },
        { wch: 20 }
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