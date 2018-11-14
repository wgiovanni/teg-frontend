<template>
    <div class id="accordion">

      <!--END HEAD-->

      <!--BEGIN FIRST CARD-->
      <div class="card border-success mb-6 text-center">
        <div class="card-header">
          <a class="card-link" data-toggle="collapse" href="#collapseFIRST">
            <h5 class="card-title text-dark">Estudiantes</h5>
          </a>
        </div>
        <div id="collapseFIRST" class="collapse show" data-parent="#accordion">
          <div class="card-body text-left">
            <table class="table table-hover group">
              <tbody>
                <tr>
                  <td>Estudiantes Extranjeros por Facultad</td>
                </tr>
                <tr>
                  <td>Estudiantes con Discapacidad</td>
                </tr>
                <tr>
                  <td>Estudiantes Pertenecientes a Grupos Étnicos</td>
                </tr>
                <tr>
                  <td>Estudiantes por Sexo</td>
                </tr>
                <tr>
                  <td>Estudiantes de Pregrado Extranjeros</td>
                </tr>
                <tr>
                  <td>Estudiantes de Pregrado por Sexo</td>
                </tr>
              </tbody>
            </table>

            <div class="card-footer text-muted">
              <h6>Indicadores para el Ranking QS</h6>

            </div>
            <table class="table table-hover group">
              <tbody>
                <tr>
                  <td class="card-footer">Estudiantes Extranjeros</td>
                </tr>
                <tr>
                  <td class="card-footer">Estudiantes por Facultad</td>
                </tr>
                <tr>
                  <td class="card-footer">Docentes Empleados / Estudiantes Matriculados</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <!--END FIRST CARD-->

      <!--BEGIN SECOND CARD-->

      <div class="card border-info mb-4 text-center">
        <div class="card-header">
          <a class="card-link" data-toggle="collapse" href="#collapseSECOND">
            <h5 class="card-title text-dark">Docentes</h5>
          </a>
        </div>
        <div id="collapseSECOND" class="collapse" data-parent="#accordion">
          <div class="card-body text-left">
            <table class="table table-hover group">
              <tbody>
                <tr>
                  <td>Docentes con Doctorado por Facultad</td>
                </tr>
                <tr>
                  <td>Docentes Extranjeros por Facultad</td>
                </tr>
                <tr>
                  <td>Docentes por Escalafón</td>
                </tr>

                <tr>
                  <td>Docentes por Sexo</td>
                </tr>

                <tr>
                  <td>Publicaciones por Facultad</td>
                </tr>
              </tbody>
            </table>

            <div class="card-footer text-muted">
              <h6>Indicadores para el Ranking QS</h6>

            </div>
            <table class="table table-hover group">
              <tbody>
                <tr>
                  <td class="card-footer">Citaciones por Facultad</td>
                </tr>
                <tr>
                  <td class="card-footer">Docentes con Doctorado</td>
                </tr>
                <tr>
                  <td class="card-footer">Docentes Extranjeros</td>
                </tr>
                <tr>
                  <td class="card-footer">Docentes Empleados / Estudiantes Matriculados</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--END SECOND CARD-->

      <!--BEGIN THIRD CARD-->
      <div class="card border-success mb-6 text-center">
        <div class="card-header">
          <a class="collapsed card-link text-center" data-toggle="collapse" href="#collapseTHIRD">
            <h5 class="card-title text-dark">Egresados</h5>
          </a>
        </div>
      </div>
       <!--END THIRD CARD-->
   
   </div>
</template> 

<style>
  .card-title {

    font-size: 18px;
  }

  .td {
    text-align: center;
    vertical-align: middle;
  }

  #accordion {
    width: 30%;
    margin-top: 2rem;
    margin-bottom: 2rem
  }


</style>