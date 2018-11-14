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

var reportName = "Estudiantes de Pregrado Extranjeros";
var img;
var info = []; //Saves data for verification
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
        "http://127.0.0.1:5000/api/v1/estudiantes-pregrado-nacionalidad";

      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {

      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      var datos = []; // Saves data from JSON
      var estudiantesV;
      var estudiantesE;
      var totalEstudiantes;  
      var d = req.data;

      // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",
        nacionalidad: "Nacionalidad",
        nombre: "Nombre",
        apellido: "Apellido",        
        email: "Correo",     
        tipo: "Tipo"
      });
      console.log("info ", info);

      estudiantesV = d["Venezolano"];
      estudiantesE = d["Extranjero"];
      totalEstudiantes = d["total-estudiantes-pregrado"];

      console.log(estudiantesV);
      console.log(estudiantesE);

      datos.push({
        
        values: [estudiantesV, estudiantesE],
        labels: ['Estudiantes Venezolanos', 'Estudiantes Extranjeros'],
        type: "pie",
        marker: { colors:['#cf6a87','#2d98da'],
                  line: {color: "#FFFFFF"}  },
        insidetextfont: {color: "#FFFFFF",
                         size: 16},
        hoverlabel: { font:{size:18}},
       
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
          r: 100,
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
      doc.addImage(img, "JPG", 20, 20);
      
       doc.setProperties({
        title: reportName,
        subject: "Reporte",
        author: "UC Ranking",
        date: date
      });

      //Info for verification
      doc.addPage();
      doc.setFontSize(8);

      // Table
      doc.cellInitialize();

      $.each(info, function(i, row) {
        $.each(row, function(j, cell) {
          if (j == "email") {
            doc.cell(15, 10, 65, 15, cell, i);        
          } else if (j == "cedula") {
            doc.cell(15, 10, 25, 15, cell, i);
         } else if (j == "nacionalidad") {
            doc.cell(15, 10, 45, 35, cell, i);
          } else {
            doc.cell(15, 10, 35, 15, cell, i);
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
        { wch: 35 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
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