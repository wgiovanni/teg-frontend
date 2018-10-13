<template>
   <!-- <div v-if="!valor">     -->
     <div>   
        <h1>Vista para los Reportes</h1>

        <div ref="bar" class="vue-plotly"/>
    </div>
</template>

<script>
import axios from "axios";

//import VuePlotly from '@statnett/vue-plotly'
import Plotly from "plotly.js";

export default {
  /*components: {
    VuePlotly
  },*/

  data() {
    //console.log("hola", chris);

    return {
    
     // valor: [],

      data: []
    };
  },

  mounted() {
    Plotly.plot(this.$refs.bar, this.data, {displayModeBar: false} );
  },

  methods: {
    load() {
      const path = "http://localhost:5000/estudiantes-sexo-facultad";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },
    successful(req) {

      //console.log(req.data);
      var facultades = [];
      var yMasculino = [];
      var yFemenino = [];
      var k;
      var size = req.data.length;
      var d = req.data;
      for (k = 0; k < size; k++) {
      	facultades.push(d[k]["facultad"]);
      	yMasculino.push(d[k]["masculino"]);
      	yFemenino.push(d[k]["femenino"]);
	  }
	  console.log(facultades);
	  console.log(yMasculino);
	  console.log(yFemenino);
	  var datos = []
	  datos.push({
	  	x: facultades,
	  	y: yMasculino,
	  	name: "Masculino",
	  	type: "bar"
	  })
	  datos.push({
	  	x: facultades,
	  	y: yFemenino,
	  	name: "Femenino",
	  	type: "bar"
	  })
	  console.log(datos);
	  this.data = datos;
	  Plotly.plot(this.$refs.bar, this.data, {displayModeBar: false} );
      //process(this.data)
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    failed() {
      this.error = "User failed!";
    }

    /*
        process(data){              
            var k;
            var array = data;
            var x = ['Masculino', 'Femenino']
            var y = []
            var name = ''
            for (k = 0; k < data.length; k++) {
                   
                if(data[k].facultad == "Ciencias y Tecnología"){
                    name = data[k].facultad;
                    if(data[k].sexo == "Masculino"){
                        y.a
                    } else {

                    }
                }
            }
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                name: 'SF Zoo',
                type: 'bar'
            },
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [12, 18, 29],
                name: 'LA Zoo',
                type: 'bar'
            }
            */
  },
  created() {
    this.load();
  }
};
</script>



