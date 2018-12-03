<template>

<div  id="funcion"  class="container-fluid marge">
    

  <div v-if="this.user.username=='vicerrector' || this.user.username=='Admin'" class="row ">
    <div class="col" >
      
                    <blockquote>
                      
                    </blockquote>
        <div class="nav nav-item nav-pills text-center " @click="limpiar();"  role="tablist" aria-orientation="vertical">
      <!-- <div class="nav nav-item nav-pills  text-center fondo" id="v-pills-tab" role="tablist" aria-orientation="vertical" > -->
        <a class="nav-link active" id="v-pills-home-tab"  @click="limpiar();" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" >CARGA DE ARCHIVO</a>
        <a class="nav-link" id="v-pills-profile-tab"  @click="limpiar();" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">FECHAS TOPES</a>
        </div>
      
                    <blockquote>
                      
                    </blockquote>
                  
    </div>

    <div class="col-11">
      <div class="tab-content " id="v-pills-tabContent">
        <div class="tab-pane fade show active "  id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" >

              <div class="row">         
                <div class="col-sm-4">
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
                   <blockquote>
                      
                    </blockquote>
                            <div class="intru">
                              <h4 >Pasos a seguir</h4>
                                <p >1-haga click en el boton seleccionar archivo.</p>
                                <p >2-seleccione el archivo csv que desea ingresar en el sistema.</p>
                                <p >3-Presione el boton de enviar.</p>
                                <p >4-En caso que ocurra  un error , modifique el archivo seleccionado y vuelva a intentarlo.</p>
                                
                            </div>
                </div>
                
                <div class="col-sm-8">
                    <blockquote>
                      <header>
                        <br>
                      <h2 id="titulo" class="text-center menu ">Pre-grado</h2>
                      </header>
                    </blockquote>
                          <!-- <ul class="" id="resul">	
                      
                          </ul>

                          <div id="columna_principal" class=" fondo2 selec" >
                              <div id="alert" class="alert  alert-success " role="alert">
                                
                              <h6 id= "i" >Selecione un archivo</h6>
                              </div>         
                            
                          </div>

                          <div class="btn-group text-center ">
                                  <input type="file" class="btn btn-primary" id="file" ref="file" v-on:change="handleFileUpload()"/> 
                                  <button @click="submitFile({pre_post})" class=" btn btn-primary color">Enviar</button>  
                          </div> -->

                          <div class="container">
                              <ul class="" id="resul">	
                      
                              </ul>
                            <div id="columna_principal" class="large-12 medium-12 small-12 cell">
                                <div id= "alert" class="alert alert-secondary" role="alert">
                                  <h6 id= "i" >Selecione un archivo</h6>
                                </div>
                                     
                            </div>
                                <div class="archivo normal rounded" >
                                  <label>Archivo
                                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload();"/>
                                  <!-- <input type="file" class="btn btn-primary" id="file" ref="file" v-on:change="handleFileUpload();"/> -->
                                  </label>
                                  <button class="btn btn-light" id="enviar" @click="submitFile({pre_post})" >Enviar</button>
                                
                                </div>
                              

                            

                          </div>

                    
                </div>                

              </div>

        </div>
        <div class="tab-pane fade " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" :load="cargar_fecha()"  >
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
              
                <div class="col s12 "  >
                    <h4>PREGRADO</h4>
                    
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Faces</label>
                      <div class="col-md-6">
                        <input type="date"  id="faces" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Facyt</label>
                      <div class="col-md-6">
                        <input type="date"  id="facyt" value="2018-01-01" class="form-control"   >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Faces</label>
                      <div class="col-md-6">
                        <input type="date"  id="face" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                  <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Fcjp</label>
                      <div class="col-md-6">
                        <input type="date"  id="fcjp" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                  <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Odontologia</label>
                      <div class="col-md-6">
                        <input type="date"  id="odontologia" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Ingieneria</label>
                      <div class="col-md-6">
                        <input type="date"  id="ingenieria" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Fcs</label>
                      <div class="col-md-6">
                        <input type="date" id="fcs" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                </div>

                
                <div class="col s12 "  >
                    <h4>POSTGRADO</h4>
                    
                    <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Faces</label>
                      <div class="col-md-6">
                        <input type="date"  id="faces2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  <div class="form-group row">
                      <label for="first_name"  class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Facyt</label>
                      <div class="col-md-6">
                        <input type="date"  id="facyt2" value="2018-01-01" class="form-control"   >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Faces</label>
                      <div class="col-md-6">
                        <input type="date"  id="face2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                  <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Fcjp</label>
                      <div class="col-md-6">
                        <input type="date"  id="fcjp2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  
                  <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Odontologia</label>
                      <div class="col-md-6">
                        <input type="date"  id="odontologia2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Ingieneria</label>
                      <div class="col-md-6">
                        <input type="date"  id="ingenieria2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="first_name" class="col-sm-4 col-form-label text-md-right">Fecha tope de subida Fcs</label>
                      <div class="col-md-6">
                        <input type="date" id="fcs2" value="2018-01-01" class="form-control" >
                      </div>
                    </div>
                  <ul class="" id="resul2">	
                      
                          </ul>
                
                    <div class="form-group" id="boton">
                        
                        <button @click="guardarfechas()" class=" btn btn-primary" >Guardar</button>
                    </div>
                </div>

        </div>

      </div>
    </div>
  </div>

  <div v-else>
        <blockquote style="margin-top: 6%;">
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
<!--                   
                          <ul class="" id="resul">	
                      
                          </ul>

                          <div id="columna_principal" class=" fondo2 selec" >
                              <div id="alert" class="alert  alert-success " role="alert">
                                
                              <h6 id= "i" >Selecione un archivo</h6>
                              </div>         
                            
                          </div>

                          <div class="btn-group text-center ">
                                  <input type="file" class="btn btn-primary" id="file" ref="file" v-on:change="handleFileUpload();"/> 
                                  <button @click="submitFile({pre_post})" class=" btn btn-primary color">Enviar</button>  
                          </div> -->

                          
                          <div class="container">
                              <ul class="" id="resul">	
                      
                          </ul>
                            <div id="columna_principal" class="large-12 medium-12 small-12 cell">
                                  <div id= "alert" class="alert alert-secondary" role="alert">
                                     <h6 id= "i" >Selecione un archivo</h6>
                                  </div>
                            </div>
                              <div class="archivo normal rounded" >
                                  <label>Archivo
                                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                  </label>
                                  <button class="btn btn-light" id="enviar" @click="submitFile({pre_post})" >Enviar</button>
                              
                              </div>
                              <!-- <div class="intru">
                              <h4 >Pasos a seguir</h4>
                                <p >1-haga click en el boton seleccionar archivo.</p>
                                <p >2-seleccione el archivo csv que desea ingresar en el sistema.</p>
                                <p >3-Presione el boton de enviar.</p>
                                <p >4-En caso que ocurra  un error , modifique el archivo seleccionado y vuelva a intentarlo.</p>
                                
                              </div> -->
                            
                          </div>
                    
                </div>
                
                <div class="col-md-1"  >
                  
                        <div class="input-group center">             
                              <div id="colorfecha" class="alert  alert-success " role="alert">
                                Fecha tope de subida:
                                <input type="date" id="fecha_tope"  disabled=true value= "2010-01-01"  />    
                              </div>  
                        </div>

                      
                    
                </div>
                
    

              </div>

  </div>
</div>


</template>

<script>                       


import Vue from 'vue';
import axios from 'axios';
import {mapState,mapGetters} from "vuex"


  export default{
    /*
      Defines the data used by the component
    */
    mounted() {
    if(!(this.user.username=='vicerrector')){       
     this.mymethod();
     }
   

    },
   
    data(){
      return {
        file: '',
        pre_post: '0',
       fecha: '2018-10-29',
        
      }
    },

    methods: {
      FuntionResize: function () {
    var widthBrowser = window.outerWidth;
    var heightBrowser = window.outerHeight;
    console.log("Tamaño de la pantalla del navegador: width=" + widthBrowser + ", height=" + heightBrowser);
},

limpiar: function(){
  if(document.getElementById('resul2')){

           document.getElementById('resul2').innerHTML = "";
           };//numero de empleados online

},
 
     
      guardarfechas: function(){
    console.log("entrooo carga fecha");
          let formData = new FormData();
         var facyt_pregrado=   document.getElementById("facyt").value;
         var faces_pregrado=   document.getElementById("faces").value;
         var face_pregrado=   document.getElementById("face").value;
         var fcjp_pregrado=   document.getElementById("fcjp").value;
         var ingenieria_pregrado=   document.getElementById("ingenieria").value;
         var fcs_pregrado=   document.getElementById("fcs").value;
         var odontologia_pregrado=   document.getElementById("odontologia").value;
        
         var facyt_postgrado=   document.getElementById("facyt2").value;
         var faces_postgrado=   document.getElementById("faces2").value;
         var face_postgrado=   document.getElementById("face2").value;
         var fcjp_postgrado=   document.getElementById("fcjp2").value;
         var ingenieria_postgrado=   document.getElementById("ingenieria2").value;
         var fcs_postgrado=   document.getElementById("fcs2").value;
         var odontologia_postgrado=   document.getElementById("odontologia2").value;  
         console.log(facyt_pregrado); 
         var path = 'http://localhost:8082/insertarfecha/' +facyt_pregrado+ '/'+faces_pregrado + '/'+face_pregrado+  '/'+ fcjp_pregrado+ '/'+ ingenieria_pregrado+ '/'+ fcs_pregrado+ '/'+ odontologia_pregrado+ '/' +facyt_postgrado+ '/'+faces_postgrado + '/'+face_postgrado+  '/'+ fcjp_postgrado+ '/'+ ingenieria_postgrado+ '/'+ fcs_postgrado+ '/'+ odontologia_postgrado ;
            
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
           console.log(res.data);  
           if(res.data[0]=='exito'){          
                              var li=document.createElement('LI');
                    li.innerHTML="<h6 id= 'i'>Se han guardado los cambios</h6>";
                    li.setAttribute('class','alert text-center alert-success');
                    document.getElementById('resul2').appendChild(li);
            }
          console.log('SUCCESS!!');

            
//           setInterval(function(){
//  if(document.getElementById('resul2')){

//           document.getElementById('resul2').innerHTML = "";
//           };//numero de empleados online
//   },15000);

        })
        .catch(res=> {
         console.log(res);
          var li=document.createElement('LI');
                    li.innerHTML="<h6 id= 'i'>'"+res+"'</h6>";
                    li.setAttribute('class','alert text-center alert-danger');
                    document.getElementById('resul2').appendChild(li);

          console.log('FAILURE!!');
        });
        console.log("deberia eliminar")
        document.getElementById('resul2').innerHTML = "";
        if(document.getElementById('resul2')){
          document.getElementById('resul2').innerHTML = "";
          };
      // setInterval("if(document.getElementById('resul2')){document.getElementById('resul2').innerHTML = '';",3000);
      
      },
     
      
mymethod(){
  
  let formData2 = new FormData();
  var path2 = ''
  if(this.pre_post==0){
              
    path2 = 'http://localhost:8082/fecha_tope/11/'+ this.user.username
                    
  }else{
              
    path2 = 'http://localhost:8082/fecha_tope/21/'+ this.user.username;   
  }

    axios.post(path2,
                formData2,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
              // res.data["exitosa"][i]
              var fecha=document.getElementById("fecha_tope");
              //console.log("entroofecha")
              var string_fecha= res.data['exitosa'][0].split("\"")[3];
              // console.log(string_fecha); 
              fecha.setAttribute('value',string_fecha);

              
         console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });



},
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
              
                     path = 'http://localhost:8082/upload/21/'+ this.user.username;   
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
                        //  console.log(document.getElementById("alert"));
                          
                          document.getElementById("alert").remove();
                         console.log("elimino alert");
                        }

                    }else{
                           if(document.getElementById("alert")!=null){
                            var div = document.getElementById("alert");
                            div.setAttribute('class','alert text-center alert-success');
                            div.textContent= "Se han guardado los cambios";
                              console.log("entroo2")
                           }else{
                    
                            document.getElementById("columna_principal").innerHTML = " <div id='alert' class='alert text-center alert-success col-lg-11' role='alert'><h6 id= 'i'>Se han guardado los cambios</h6> </div>  ";
                            document.getElementById("resul").innerHTML = "";
                              console.log("entroo3")
                          }
                      
                    }

              }else{
                
                     if(document.getElementById("alert")!=null){
                          var div = document.getElementById("alert");
                          div.setAttribute('class','alert text-center alert-danger');
                          div.textContent= "Error al cargar el archivo";
                    }else{
                   
                           document.getElementById("columna_principal").innerHTML =  " <div id='alert' class='alert text-center alert-danger col-lg-11' role='alert'><h6 id= 'i'>Error al cargar el archivo</h6> </div>  ";
                          
                          document.getElementById("resul").innerHTML = "";
                    }
              }
          
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
      cargar_fecha: function(){

         console.log("entrooo carga fecha");
            let formData = new FormData();

        var path = 'http://localhost:8082/fechasvicerrector';
            
            axios.post(path,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                
              }
            ).then(function(res){
              
                  document.getElementById("facyt").setAttribute('value',res.data[0][0].substring(0, 10));
                  document.getElementById("fcjp").setAttribute('value',res.data[1][0].substring(0, 10));
                  document.getElementById("odontologia").setAttribute('value',res.data[2][0].substring(0, 10));
                  document.getElementById("ingenieria").setAttribute('value',res.data[3][0].substring(0, 10));
                  document.getElementById("fcs").setAttribute('value',res.data[4][0].substring(0, 10));
                  document.getElementById("face").setAttribute('value',res.data[5][0].substring(0, 10));
                  document.getElementById("faces").setAttribute('value',res.data[6][0].substring(0, 10));
                  
                  document.getElementById("facyt2").setAttribute('value',res.data[7][0][0].substring(0, 10));
                  document.getElementById("fcjp2").setAttribute('value',res.data[7][1][0].substring(0, 10));
                  document.getElementById("odontologia2").setAttribute('value',res.data[7][2][0].substring(0, 10));
                  document.getElementById("ingenieria2").setAttribute('value',res.data[7][3][0].substring(0, 10));
                  document.getElementById("fcs2").setAttribute('value',res.data[7][4][0].substring(0, 10));
                  document.getElementById("face2").setAttribute('value',res.data[7][5][0].substring(0, 10));
                  document.getElementById("faces2").setAttribute('value',res.data[7][6][0].substring(0, 10));
              
         
          console.log('SUCCESS!!');
        })
        .catch(res=> {
         console.log(res);
          console.log('FAILURE!!');
        });
        
      },
      cambia_titulo(instancia){
        if(instancia==0){
          document.getElementById("titulo").innerHTML = "Pre-grado";
         
        }else{
          document.getElementById("titulo").innerHTML = "Post-grado";
        
        }
        if(!(this.user.username=='vicerrector')){
            
        this.mymethod();
        }

       }, 

       
       
    
    },
    computed:{
         ...mapGetters(["user"])
       }

  }

 
</script>

 <style>
 
 .archivo{
          
          background: rgba(155,155,155,0.3);
          padding: 40px 40px 60px 40px ;
          margin:auto;
          margin-top:12%;
          margin-bottom:8%;
        }
    #i{
        margin-top:10px;
         
        }
    .rojo{
         border: 1px solid rgba(255,0,0,0.5);
        }
    .verde{
       background:rgba(0,128,0,0.2);
        }
    .normal{
           border: 1px solid rgba(155,155,155,0.1);
         
        } 
      #fecha{
           display:none;
         
        }
      .copyright{
          
          
        }
        .intru{
          
             padding: 10px 40px;
           
        }
   .intru h4, .intru p{
          

         text-align: center;
        }
    h2{
      margin-top:10px;
      margin-bottom:40px;
      text-align: center;
      opacity :0.5;
        }
      h5{
      margin-bottom:15px;
      text-align: center;
      opacity :0.7;
        }
        #enviar {
       
          width:150px;
        }
        #submenu {
       
         margin-top:10px;
        margin-bottom:10px;
        }

        .marge {
       
         margin-top:8%;
       
        }
@media (max-width: 1000px) { 


   .intru {
          
           padding: 0px 0px;
           
        }


 }
 @media (max-width: 768px) { 


   .intru {
          
          display:none;
          /* margin-top: 20%; */
        }

 

    


 }

  @media (max-width: 1000px) { 


  
     #enviar {
          margin-top:10px;
          width:100%;
        }

    


 }
  .margen{
          
         
          margin-top:5%;
          margin-bottom:8%;
        }
  #boton{
            display:bloack;
          
          width: 180px;
          margin:auto;
       
        }
  










.vice{
  margin-top: 5%;
}
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

     
          <!-- <div class="form-group">
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                  <h4>FACULTAD:</h4>
                  <h5>FACYT</h5>
                  <h5>FACE</h5>
                  <h5>FACES</h5>
                  <h5>INGENIERIA</h5>
                  <h5>FCJP</h5>
                  <h5>ODONTOLOGIA</h5>
                  <h5>FCS</h5>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                  <h4>FECHA TOPE:</h4>
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28" max="2018-05-10"  class="form-control" >
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="form-group">
                  <h4>ACTUALIZAR:</h4>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  </div>
                  </div>
              </div>
          </div>
              -->
              

              

            <!-- <div class="form-group container-fluid ">
          
              <div class="row ">

                


                <div class="input-group mb-3">
                  <div class="col-sm-2 ">
                  <h5>FACYT</h5>
                  </div>
                  <div class="col-sm-4 ">
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28"  class="form-control" >
                  </div>
                  <div class="col-sm-2">
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  </div>
                    
                </div>

                <div class="input-group mb-3">
                  <div class="col-sm-2">
                  <h5>FACE</h5>
                  </div>
                  <div class="col-sm-4">
                  <input type="date" name="date" id="dateFin"  value="2018-05-10" min="2016-04-28"   class="form-control" >
                  </div>
                  <div class="col-sm-2">
                  <button type="button"  class="btn btn-default">GUARDAR</button>
                  </div>
                    
                </div>

              </div>

            </div>
            
            
            // for(var i=0;i<string_fecha.length;i++){
              //     console.log(string_fecha[i]);
              //     console.log(i);

              // }
              
              //this.fecha=string_fecha;
              //fecha='2010-05-05'; -->
            