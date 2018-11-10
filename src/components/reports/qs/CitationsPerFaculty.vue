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

var reportName = "Citaciones por Facultad";
var img;
var info = []; //Saves data for verification
var date = new Date();

export default {
  mounted() {
    
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
      const path = "http://127.0.0.1:5000/api/v1/citas-facultad";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {    

      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      var datos = []; // Saves data from JSON
      var facultades = [];
      var numCitaciones = [];
      var i;
      var size = req.data.length;
      var d = req.data;

      for (i = 0; i < size; i++) {
        facultades.push(d[i]["facultad"]);
        numCitaciones.push(d[i]["citaciones"]);
      }

      console.log(facultades);
      console.log(numCitaciones);

      datos.push({
        x: facultades,
        y: numCitaciones,
        name: "Citaciones",
        type: "bar",
        marker: { color: "#00cec9" }
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
      Plotly.plot(this.$refs.bar, this.data, layout, config).then(function(gd) {
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
      doc.text(reportName, 15, 15);     
      doc.addImage(img, "JPG", 10, 10);
      doc.save(reportName + ".pdf");
    }, //end_of_download()

    download_img() {
      var a = document.createElement("a");
      a.href = img.src;
      a.download = reportName + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } //end_of_download()
  }
};
</script>