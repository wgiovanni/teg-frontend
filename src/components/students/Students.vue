<template>

<body class="container-fluid" >

<div class="container-fluid" id="funcion"  v-on:load="miFuncion();" >
    
      <blockquote>
        <header>
          <br>
        <h2 id="titulo" class="text-center menu ">Pre-grado</h2>
        </header>
      </blockquote>

<div class="row">
          
       
  <div class="col-sm-3">
    <nav class="navbar navbar-default selec ">
            <div class="container-fluid btn-group-vertical ">
                <div class="navbar-header ">
                  <h5>RANKING</h5>
                 
                </div>

                <div class="btn-group-vertical btn-group-toggle  " id="prueb">


                  <div class="form-check selec ">
                    <input type="radio" class="custom-control-input " id="Pre-grado" value="0"  v-on:change="cambia_titulo(0);" v-model= "pre_post" name="groupOfMaterialRadios"  checked>
                    <label class="custom-control-label"  for="Pre-grado"><br>Pre-grado</label>
                  </div>


                  <div class="form-check selec ">
                    <input type="radio" class="custom-control-input "  id="Post-grado" value="1"  v-on:change="cambia_titulo(1);" v-model= "pre_post" name="groupOfMaterialRadios" >
                    <label class="custom-control-label"  for="Post-grado"><br>Post-grado</label>
                  </div>



                </div>

            </div>
    </nav>
  </div>
  
  <div class="col-sm-6">
    
            <ul class="" id="resul">	
        
            </ul>

            <div id="columna_principal" class=" fondo2 selec" >
                <div id="alert" class="alert  alert-success " role="alert">
                  
                <h6 id= "i" >Selecione un archivo</h6>
                </div>         
              
            </div>

            <div class="btn-group text-center ">
                    <input type="file" class="btn btn-primary" id="file" ref="file" v-on:change="handleFileUpload()"/> 
                    <button @click="submitFile({pre_post})" class=" btn btn-primary color">Enviar</button>  
            </div>
      
  </div>
  
  <div class="col-md-1">
    
          <div class="input-group center">             
                <div  class="alert  alert-success " role="alert">
                  Fecha tope de subida:
                  <input type="date" disabled=true value="2018-10-29"/>    
                </div>  
          </div>

        
      
  </div>
  
  
</div>

  
</div>




</body>

</template>



<script>



import Vue from 'vue';
import axios from 'axios';
import {mapState,mapGetters} from "vuex"
  export default{
    /*
      Defines the data used by the component
    */
   
    data(){
      return {
        file: '',
        pre_post: '0',
       
        
      }
    },
    methods: {
      /*
        Submits the file to the server
      */

      submitFile(pre_post){
        /*
                Initialize the form data
            */
           console.log("entrooo");
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);

        /*
          Make the request to the POST /single-file URL
        */
        var path = '';
            
            if(pre_post.pre_post==0){
              
                        path = 'http://localhost:8082/upload/11/'+ this.user.username;
                          // path = 'http://localhost:8082/api/v1/estudiantes';
                    
            }else{
              
                     path = 'http://localhost:8082/upload/21'+ this.user.username;
;   
            }
            console.log(path);
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
              

              if(!(res.data['exitosa']=="error")){
                    
                   if(document.getElementById("resul")){
                     document.getElementById("resul").innerHTML = "";
                   }
                    console.log(localStorage.getItem('user'))
                    for(var i=0;i<res.data["exitosa"].length;i++){
                    
                    var li=document.createElement('LI');
                    li.innerHTML=res.data["exitosa"][i];
                    li.setAttribute('class','alert text-center alert-danger');
                    document.getElementById('resul').appendChild(li);

                    }

                     if(res.data["exitosa"].length>0){
                        if(document.getElementById("alert")){
                         document.getElementById("alert").remove();
                        }
                        // document.getElementById("resul").innerHTML = "";
                        // console.log("entroo1")

                    }else{
                           if(document.getElementById("alert")!=null){
                            var div = document.getElementById("alert");
                            div.setAttribute('class','alert text-center alert-success');
                            div.textContent= "Se han guardado los cambios";
                            //  console.log("entroo2")
                           }else{
                    
                            document.getElementById("columna_principal").innerHTML = " <div id='alert' class='alert text-center alert-success col-lg-11' role='alert'><h6 id= 'i'>Se han guardado los cambios</h6> </div>  ";
                            document.getElementById("resul").innerHTML = "";
                            //  console.log("entroo3")
                          }
                      
                    }

              }else{
                
                     if(document.getElementById("alert")!=null){
                          var div = document.getElementById("alert");
                          div.setAttribute('class','alert text-center alert-danger');
                          div.textContent= "Error al cargar el archivo";
                    }else{
                   
                           document.getElementById("columna_principal").innerHTML = " <div id='alert' class='alert text-center alert-danger col-lg-11' role='alert'><h6 id= 'i'>Error al cargar el archivo</h6> </div>  ";
                          document.getElementById("resul").innerHTML = "";
                    }
              }
             
// <div class='btn-group text-center'> <input type='file' class='btn btn-primary' id='file' ref='file' v-on:change='handleFileUpload()'/> <button v-on:click='+submitFile({pre_post},{tipo_archiv})+' class=' btn btn-primary color'>Enviar</button>
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
       
        if(this.$refs.file.files[0].name){
          if(document.getElementById("alert")){
                  var div = document.getElementById("alert");
                    div.setAttribute('class','alert text-center alert-success');
                    div.textContent= "Archivo: " + this.$refs.file.files[0].name ;
            }
            // var div = document.getElementById("i");
            // div.textContent  = "Archivo: " + this.$refs.file.files[0].name ; 
        }
        
      },
      cambia_titulo(instancia){
        if(instancia==0){
          document.getElementById("titulo").innerHTML = "Pre-grado";
         
        }else{
          document.getElementById("titulo").innerHTML = "Post-grado";
        
        }
      
       }, 

       
       
    
    },
    computed:{
         ...mapGetters(["user"])
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

