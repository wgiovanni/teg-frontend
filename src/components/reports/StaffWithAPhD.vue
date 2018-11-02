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
      </div>
    </div>     

    <!--Saves plot as image-->
    <img id="jpg-export" class="hidden"/>

  </div>  
</template>


<style>
/* Report titles */
.title {
  font-size: 30px;
  text-align: center;
  margin: 30px;
}

/* Download Buttons */

.download-buttons {
  text-align: center;
  width: 100%;
}

.button {
  background-color: #f2f2f2;
  font-size: 14px;
  padding: 8px 20px;
  margin: 10px;
  border: 12px;
  border-radius: 10px;
  transition-duration: 0.4s;
  cursor: pointer;
  display: inline-block;
}

.button:hover {
  background-color: #edf0f8;
}

.button:active {
  background-color: #c8d3ea;
}

.button:focus {
  outline: 0;
}

/*Hides image*/
.hidden {
  display: none;
}
</style>


<script>
import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";

var reportName = "Proporción de Profesores con Doctorado o PhD";
var img;

/*
var totalProfesores = 23541;
var totalDoctorado = 1250;
var total2;

total2 = totalProfesores - totalDoctorado;
*/

export default {
  mounted() {
    document.getElementById("report").innerHTML = reportName;
    img = document.getElementById("jpg-export"); // Gets image

/*
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

*/
  },

  data() {
    return {
      data: [/*
        {
          values: [totalDoctorado, total2],
          labels: ["Profesores con Doctorado", "Profesores sin Doctorado"],
          type: "pie",
          marker: { colors: ["#ff9f43", "#54a0ff"] }
        }
     */ ]
    };
  },

  created() {
    //this.load();
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

      var datos = []; // Saves data from JSON
      var totalProfesores;
      var totalDoctorado;
      var total2;
      var i;
      var size = req.data.length;
      var d = req.data;

      console.log(d);

      totalDoctorado = d[0]["profesores-doctorado"];
      totalProfesores = d[1]["total-profesores"];

      console.log(totalProfesores);
      console.log(totalDoctorado);

      total2 = totalProfesores - totalDoctorado;

      datos.push({
        
        values: [totalDoctorado, total2],
        labels: ['Profesores con Doctorado', 'Profesores sin Doctorado'],
        type: "pie",
        marker: { colors:['#ff9f43','#54a0ff']  }
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

     // Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
     // Displays graph
      Plotly.plot(this.$refs.pie, this.data, layout, config).then(function(gd) {
      //  Saves plot as image
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
      doc.save("Reporte - " + reportName + ".pdf");
    }, //end_of_download()

    download_img() {
      var a = document.createElement("a");
      a.href = img.src;
      a.download = "Reporte - " + reportName + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } //end_of_download()
  }
};
</script>