<template>

    <div class="container">        
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <div class="panel-group" id="accordion">
                        
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title" align="center">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><span class="glyphicon glyphicon-file">
                    </span>Reportes Ranking QS</a>
                </h4>
              </div>
              <div id="collapseFour" class="panel-collapse collapse" align="center"> 
                
                  <div class="list-group">
                    <a href="/report/ProportionOfInternationalFaculty" class="list-group-item">
                      Proporción de Profesores Internacionales
                    </a>
                    <a href="/report/ProportionOfInternationalStudents" class="list-group-item">Proporción de Estudiantes Internacionales</a>
                    <a href="/report/CitationsPerFaculty" class="list-group-item">
                    Citaciones por Facultad
                  </a>
                  
                  <a href="/report/ProportionOfStudentsPerFaculty" class="list-group-item">Proporción de Estudiantes por Facultad</a>
                  <a href="/report/StaffWithAPhD" class="list-group-item">Profesores con Doctorado o PhD</a>
                  <a href="/report/FacultySudentRatio" class="list-group-item">Relación entre Docentes Empleados y Alumnos Matriculados</a>
                  
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title" align="center">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive"><span class="glyphicon glyphicon-heart">
                    </span>Reportes</a>
                </h4>
              </div>
              <div id="collapseFive" class="panel-collapse collapse">
                <div class="list-group">
                  <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">Reporte 1</h4>
                    <p class="list-group-item-text">Docentes.</p>
                  </a>
                </div>
                <div class="list-group">
                  <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">Reporte 2</h4>
                    <p class="list-group-item-text">Estudiantes</p>
                  </a>
                </div>
                <div class="list-group">
                  <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">Reporte 3</h4>
                    <p class="list-group-item-text">Egresados.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="ranking" align="center">Reportes</h3>
            </div>
            <div class="panel-body">
               <img src="../../assets/QS-World-University-Rankings.jpg" class="img-fluid" alt="Responsive image">
            </div>
             
          </div>
        </div>
      </div>
      
    </div>
        
</template>

<style>
.ranking {
  font-size: 60px;
  margin: 60px;
  align-content: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.panel-title {
  margin: 50px;
  font-size: 30px;
}

#accordion .glyphicon {
  margin-right: 10px;
  color: "#FFFFFF";
}
.panel-collapse > .list-group .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
}
.panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel-collapse .list-group-item {
  border-radius: 0;
}

.panel-collapse .list-group .list-group {
  margin: 0;
  margin-top: 10px;
}
.panel-collapse .list-group-item li.list-group-item {
  margin: 0 -15px;
  border-top: 1px solid #ddd !important;
  border-bottom: 0;
  padding-left: 30px;
}
.panel-collapse .list-group-item li.list-group-item:last-child {
  padding-bottom: 0;
}

.panel-collapse div.list-group div.list-group {
  margin: 0;
}
.panel-collapse div.list-group .list-group a.list-group-item {
  border-top: 1px solid #ddd !important;
  border-bottom: 0;
  padding-left: 30px;
}
.panel-collapse .list-group-item li.list-group-item {
  border-top: 1px solid #ddd !important;
}
</style>

<script>
export default {};
</script>

