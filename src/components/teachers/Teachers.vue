<template>
	<div class="container">
		<div class="large-12 medium-12 small-12 cell">
      <div id= "i" class="alert alert-secondary" role="alert">
      Por favor ingrese un archivo .csv
    </div>
    <div class="archivo normal" id="archi">
		  <label>Archivo
		    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
		  </label>
		  <button class="btn btn-outline-secondary" id="enviar"v-on:click="submitFile()">Enviar</button>
      </div>
		</div>
	</div>

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
            const path = 'http://localhost:8083/upload';
          

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
           if(res.data["exitosa"]== "El Archivo csv ha sido procesado con exito!!!"){
            $( "#archi" ).removeClass( "rojo" )
            $( "#archi" ).removeClass( "normal" )
            $( "#archi" ).addClass( "verde" )
            $( "#i" ).removeClass( "alert alert-danger" )
            $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-success" )
            $('#enviar').attr("disabled", true); 
           }else
           {
            $( "#archi" ).removeClass( "normal" ).addClass( "rojo" )
            $( "#i" ).removeClass( "alert alert-secondary" ).addClass( "alert alert-danger" )
           }

         
          console.log(res.data); 
          console.log('SUCCESS!!');
        })
        .catch(res=> {
        console.log(res);
        console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style type="text/css">
  .archivo{
          
        
          padding: 30px 30px;
          width: 60%;
          min-width: 500px;
          
          margin:auto;
          margin-top:11%;
        }
    #i{
        margin-top:10px;
         
        }
    .rojo{
         border: 1px solid rgba(255,0,0,0.2);
        }
    .verde{
         border: 1px solid rgba(0,128,0,0.2);
        }
    .normal{
           border: 1px solid rgba(155,155,155,0.1);
         
        } 
    #enviar  {
          
          width: 20%;
        }
    
</style">

