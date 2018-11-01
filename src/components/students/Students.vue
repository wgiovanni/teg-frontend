<template>

<body >

<div class="container" id="funcion"  v-on:load="miFuncion();" >
    
      <blockquote>
        <header>
          <br>
        <h2 class="text-center menu ">Pre-grado</h2>
        </header>
      </blockquote>

    <div class="row ">

       <!-- <nav class="col-lg-2 nav flex-column nav-pills"  >-->

<nav class="col-lg-2  navbar navbar-default selec ">
  <div class="container-fluid selec ">
    <div class="navbar-header selec">
      <a class="navbar-brand selec" href="#">RANKING QS</a>
    </div>
    <div class="btn-group-vertical btn-group-toggle  ">

<div class="form-check selec ">
  <input type="radio" class="custom-control-input" id="Pre-grado" v-on:change="cambia_titulo();" name="groupOfMaterialRadios" checked>
  <label class="custom-control-label" for="Pre-grado"><br>Pre-grado</label>
</div>


<div class="form-check selec ">
  <input type="radio" class="custom-control-input " id="Post-grado" v-on:change="cambia_titulo();" name="groupOfMaterialRadios">
  <label class="custom-control-label" for="Post-grado"><br>Post-grado</label>
</div>

</div>


  <div class="btn-group-vertical btn-group-toggle text-center">
  
<div class="custom-control custom-radio selec">
  <input type="radio" class="custom-control-input" id="Informacion-estudiante"  v-on:change="cambia_titulo();" name="groupOfDefaultRadios"checked>
  <label class="custom-control-label " for="Informacion-estudiante"><br>Informacion estudiante</label>
</div>


<div class="custom-control custom-radio selec">
  <input type="radio" class="custom-control-input" id="Asignatura-inscrita" name="groupOfDefaultRadios" >
  <label class="custom-control-label" for="Asignatura-inscrita"><br>Asignatura inscrita</label>
</div>


<div class="custom-control custom-radio selec">
  <input type="radio" class="custom-control-input" id="Asignatura aprobada" name="groupOfDefaultRadios">
  <label class="custom-control-label" for="Asignatura aprobada"><br>Asignatura aprobada<br></label>
</div>
</div>

</div>




</nav>


        <section class="col-lg-6 text-center panel-body">

          <div class="row col-lg-12  fondo2 selec" >
            <div id= "i" class="alert text-center alert-success col-lg-11" role="alert">
              Selecione un archivo
             
            </div>
             
            <div class="btn-group text-center">


		              <input type="file" class="btn btn-primary" id="file" ref="file" v-on:change="handleFileUpload()"/> 
                  <button v-on:click="submitFile()" class=" btn btn-primary color">Enviar</button>  
            </div>
            
          </div>

        </section>

        <section class="col-lg-4 panel-body">
          <div class="row ">       

             <!-- <div class="input-group">
                <div id= "i" class="alert  alert-success " role="alert">
                  Archivo actual:
                </div>
                <button  class="btn btn-primary btn-block">Eliminar</button>
             </div>  
              -->
            
            <div class="input-group center">             
              <div  class="alert  alert-success " role="alert">
                Fecha tope de subida:
                <input type="date" disabled=true value="2018-10-29"/>    
              </div>  
            </div>

          </div>
        </section>

    </div>

</div>

<div class="pie">

</div>
 
</body>



</template>



<script>


import axios from 'axios';

  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: ''
      }
    },

    methods: {
      /*
        Submits the file to the server
      */

      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
            const path = 'http://localhost:8082/upload';
          

            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
            var div = document.getElementById("i");
           div.textContent  = res.data["exitosa"];  
          console.log(res.data); 

          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });
      },

  // Setup the dnd listeners.
      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
        console.log(this.$refs.file.files[0].name);
        if(this.$refs.file.files[0].name){
            var div = document.getElementById("i");
           div.textContent  = "Archivo: " +this.$refs.file.files[0].name ; 
        }
        
      },
      cambia_titulo(){
         var pre= document.getElementById('Informacion-estudiante');
         var post= document.getElementById('Asignatura-inscrita');
          var post2= document.getElementById('Asignatura aprobada');
         
        console.log(pre.value);
        console.log(post.value);
        console.log(post2.value);
      }
    }
  }

 



</script>

 <style>


/* navbar */
.navbar-default {
    background-color: #F8F8F8;
    border-color: #E7E7E7;
}
/* Title */
.navbar-default .navbar-brand {
    color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
    color: #5E5E5E;
}
/* Link */
.navbar-default .navbar-nav > li > a {
    color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    color: #333;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #E7E7E7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
    color: #555;
    background-color: #D5D5D5;
}
/* Caret */
.navbar-default .navbar-nav > .dropdown > a .caret {
    border-top-color: #777;
    border-bottom-color: #777;
}
.navbar-default .navbar-nav > .dropdown > a:hover .caret,
.navbar-default .navbar-nav > .dropdown > a:focus .caret {
    border-top-color: #333;
    border-bottom-color: #333;
}
.navbar-default .navbar-nav > .open > a .caret,
.navbar-default .navbar-nav > .open > a:hover .caret,
.navbar-default .navbar-nav > .open > a:focus .caret {
    border-top-color: #555;
    border-bottom-color: #555;
}
/* Mobile version */
.navbar-default .navbar-toggle {
    border-color: #DDD;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
    background-color: #DDD;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: #CCC;
}
@media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #777;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
          color: #333;
    }
}


.selec{
  line-height: 100%;
} 

.fondo{
   background: #EBEDEF;  
}
.color{
  background: #2C3E50;
}
.fondo2{  
    text-align:center;
    display: table-cell;
}
.btn { 
  display: block;   
  margin-left: auto;   
  margin-right: auto; 
  }
 
  .col-lg-2 { line-height: 100px; }
  .col-lg-5 { line-height: 200px; }
  .col-lg-12 { line-height: 80px; }

  .footer,.copyright{
  text-align: center;
  }

/*--footer--*/
.footer {
	background: #2F292B;
	text-align:center;
	padding:1% 0;
}
.texto-pie-pagina h2{
	color:#fff;
	font-size:3em;
	font-family: 'bebas_neueregular';
	text-transform:uppercase;
	margin-bottom:2%;
}
.texto-pie-pagina p{
	font-size:0.8125em;
	line-height:1.5em;
	color:#989898;
}
  /***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
  }
  .pie{
   margin-top:2%; 
 }
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
 @media only screen and (max-width: 640px) and (min-width: 480px) {
   .envolver{
		width:95%;
	}
 }
 /*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
 @media only screen and (max-width: 480px) {
   .envolver{
		width:95%;
	}
 }
 /***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
@media only screen and (max-width: 640px) and (min-width: 480px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
@media only screen and (max-width: 480px) {
  .envolver{
		width:95%;
	}
}
/***** Media Quries *****/
@media only screen and (max-width: 1024px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 800 PIXELS */
@media only screen and (max-width: 800px) {
  .envolver{
		width:95%;
	}
}
/*  GO FULL WIDTH AT LESS THAN 640 PIXELS */
@media only screen and (max-width: 640px) and (min-width: 480px) {
  .envolver{
		width:95%;
	}
}

/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */
@media only screen and (max-width: 480px) {
  .envolver{
		width:95%;
	}
}
@media (max-width:1366px){
  .envolver{
		width:90%;
	}
}
@media (max-width:1280px){
  .envolver{
		width:90%;
  }
  .pie{
   margin-top:41%; 
 }

}
@media (max-width:1024px){
  .envolver{
		width:90%;
  }
  .pie{
   /* margin-top:4%;  */
 }
}
@media (max-width:800px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2.5em;
	}  
  

}
@media (max-width:768px){
  .envolver{
		width:90%;
	}
}
@media (max-width:640px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2.5em;
	}
}
@media (max-width:480px){
  .envolver{
		width:90%;
  }	
  .texto-pie-pagina h2 {
		font-size: 2em;
	}
}
@media (max-width:320px){
  .envolver{
		width:90%;
  }
  .texto-pie-pagina h2 {
		font-size: 2em;
  }
  
}
        </style>

