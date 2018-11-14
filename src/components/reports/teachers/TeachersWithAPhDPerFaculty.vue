<template>
  <div>       
    
  <!--Title-->    
  <h1 id="report" class="title"/>   
  
  <!--Plotly-->
    <div ref="bar" class="vue-plotly"/>
    
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
import Spinner from "@/components/Spinner";

var reportName = "Docentes con Doctorado por Facultad";
var img;
var info = []; //Saves data for verification
var date = new Date();

export default {
  mounted() {
    
  },

  components: {
    Spinner
  },

  data() {
    return {
      data: [],
      loading: true
    };
  },

  created() {
    this.load();
  },

  methods: {
    load() {
      const path = "http://127.0.0.1:5000/api/v1/profesor-doctorado-facultad";
      this.loading = true;
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {

      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      this.loading = false;
      var datos = []; // Saves data from JSON
      var facultades = [];
      var items = [];
      var nombreFacultad = [];
      var totalFacultad = [];
      var i;
      var size = req.data.length;
      var d = req.data;

      // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",
        primer_nombre: "Primer Nombre", 
        segundo_nombre: "Segundo Nombre",      
        primer_apellido: "Primer Apellido",     
        primer_apellido: "Primer Apellido",  
        segundo_apellido: "Segundo Apellido",   
        correo: "Correo",
        area_de_investigacion: "Área de Investigación",
        facultad: "Facultad"
      });
      console.log("info ", info);

      // Saves data for plot
      facultades = d["facultades"];
      items = d["items"];

      console.log(facultades);
      console.log(items);

      for (i = 0; i < 7; i++) {
        nombreFacultad.push(facultades[i]["facultad"]);
        totalFacultad.push(facultades[i]["cantidad"]);
      }

      datos.push({
        x: nombreFacultad,
        y: totalFacultad,
        name: "Profesores con PhD",
        type: "bar",
        marker: { color: "#ff5e57" },
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
          b: 200,
          t: 50,
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

      //Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.plot(this.$refs.bar, this.data, layout, config).then(function(gd) {
        //Saves plot as image
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
          if(cell != "Segundo Nombre" & cell != "Segundo Apellido"){
            if(j != "segundo_nombre" & j != "segundo_apellido"){
              if (j == "correo" | j == "facultad") {
                doc.cell(15, 10, 65, 15, cell, i);
              } else if ((j == "area_de_investigacion")) {
                doc.cell(15, 10, 40, 15, cell, i);
              } else if (j == "cedula") {
                doc.cell(15, 10, 20, 15, cell, i);
              } else {
                doc.cell(15, 10, 30, 15, cell, i);
              }
            }
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
        Author: "UC Ranking",
        CreatedDate: date
      };

      // Column Properties
      var wscols = [
        { wch: 10 },
        { wch: 20 },
        { wch: 20 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
        { wch: 25 },
        { wch: 40 }
      ];
      ws["!cols"] = wscols;

      var wsrows = [{ hpt: 20 }];
      ws["!rows"] = wsrows;

      /*
      // Header
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            "Cédula",
            "Primer Nombre",
            "Segundo Nombre",
            "Primer Apellido",
            "Segundo Apellido",
            "Correo",
            "Área de Investigación",
            "Facultad"
          ]
        ],
        { origin: "A1" }
      );
      */

      // add Worksheet to Workbook
      XLSX.utils.book_append_sheet(wb, ws, "Reporte");

      // export Excel file
      XLSX.writeFile(wb, reportName + ".xlsx");
    } //end_of_download
  }
};
</script>