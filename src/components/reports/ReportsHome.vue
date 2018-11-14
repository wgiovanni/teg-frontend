
<template>
<!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">-->

<div class="container text-center">
  <div class="row align-items-center">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="service-heading-block">          
       
      </div>
    </div>

    <div class="row align-self-center">

    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="text-center feature-block">
        <span class="fb-icon color-students">
          <i class="fas fa-chart-bar" aria-hidden="true"></i>
        </span>
      
        <h4 class="color-students">Estudiantes</h4>
        <p class="">Estudiantes de Pre-grado y Post-grado de la Universidad de Carabobo</p>
        <a href="open.html" class="btn btn-students btn-custom">Ver</a>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-4">
        <div class="text-center feature-block">
          <span class="fb-icon color-teachers">
            <i class="fas fa-chart-pie" aria-hidden="true"></i>
          </span>
          <h4 class="color-teachers">Docentes</h4>
          <p class="">Reportes de Docentes de la Universidad de Carabobo 12235556546456</p>
          <a href="javascript:void(0)" class="btn btn-teachers btn-custom">Ver</a>
        </div>
      </div>


    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="text-center feature-block">
        <span class="fb-icon color-graduates">
          <i class="fa fa-chart-area" aria-hidden="true"></i>
        </span>
        <h4 class="color-graduates">Egresados</h4>
        <p class="">Reportes de Egresados de la Universidad de Carabobo</p>
        <a href="javascript:void(0)" class="btn btn-graduates btn-custom">Ver</a>
      </div>
    </div>
  </div>
    
</div>
</div>
    
</template>


<style>
  /*============ Service Features style ============*/
  .service-heading-block {
    display: block;
    margin-bottom: 30px;
  }

  .title {
    display: block;
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 10px;
  }

  .sub-title {
    font-size: 18px;
    font-weight: 100;
    line-height: 24px;
  }


  .feature-block {
    background-color: #fff;
    border-radius: 2px;
    padding: 15px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 15px;
   /* margin-right: 15px;*/
    transition: all ease .5s
  }


  .ms-feature:hover,
  .ms-feature:focus {
    background-color: #fafafa;
    box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 3px rgba(0, 0, 0, 0.12);
  }

  
  .fb-icon {
    border-radius: 120%;
    height: 140px;
    width: 140px;
    margin: 12rem auto;
    transition: all 0.5s ease 0s;    
    display: grid;
    font-size: 44px;
    line-height: 10px;
    text-align: center;      
  }


  .feature-block:hover .fb-icon,
  .feature-block:focus .fb-icon {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    transform: rotate(360deg);
  }

  
  .fb-icon.color-students {
    background-color: #A17700;
    color: #fff;
  }

  .fb-icon.color-teachers {
    background-color:#006D55;
    color: #fff;
  }

  .fb-icon.color-graduates {
    background-color:#981E32;
    color: #fff;
  }


  .feature-block h4 {
    font-size: 30px;
    font-weight: bold;
   
  }

  .color-students {
    color: #A17700;
    font-size: 50px;
    text-align: center;
    align-content: center;
  }

  .btn-students {
    background-color: #A17700;
    color: #fff
    
  }

  .btn-students:hover {
    background-color:#CCAA4C;
  }

  .color-teachers {
    color: #006D55;
    font-size: 50px;
    text-align: center;
    align-content: center;
  }

  .btn-teachers {
    background-color: #006D55;
    color: #fff
  }

  .btn-teachers:hover {
    background-color:#337F6E;
  }

  .color-graduates {
    color: #981E32;
    font-size: 50px;
    text-align: center;
    align-content: center;
  }

  .btn-graduates {
    background-color: #981E32;
    color: #fff
  }

  .btn-graduates:hover {
    background-color:#993343;
  }

 
  .btn-custom {
    border: medium none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    margin: 10px 1px;
    outline: 0 none;
    padding: 8px 30px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
