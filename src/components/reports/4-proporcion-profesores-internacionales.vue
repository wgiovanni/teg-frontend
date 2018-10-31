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
  width: 100%
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

var reportName = "Proporción de Profesores Internacionales";
var img;
 
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
    //this.load();
  },

  methods: {

     load() {
      const path = "http://localhost:5000/profesores-internacionales-proporcion";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    successful(req) {    

      var datos = []; // Saves data from JSON
      var totalProfesores;
      var totalInternacional;
      var totalNacional;   
      var d = req.data;

      
      totalInternacional = d[0][""];
      totalProfesores = d[1][""];
      totalNacional = totalProfesores - totalInternacional;

      datos.push({
        
        values: [totalInternacional, totalNacional],
        labels: ['Profesores Internacionales', 'Profesores Nacionales'],
        type: "pie",
        marker: { colors:['#182C61','#6D214F']  }
      });

      console.log(datos);
      this.data = datos;

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