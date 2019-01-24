<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            </h6>
            <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Reportes Estudiantes
            </h4>  
            <hr>
            <ul class="nav flex-column">
                <router-link tag="li" class="nav-item"
                    v-for="link in links"
                    v-bind:key="link.id"
                    :to="`${link.path}`">
                    <a class="nav-link" style= "font-size:16px !important">
                        {{link.name}}
                    </a>
                </router-link>
            </ul>

        </div>
    </nav>
</template>

<script>
//import axios from "axios";
//import { mapState, mapGetters } from "vuex";
//import { URL_USER } from "@/common/constants"
export default {
  name: "SidebarStudents",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Egresados por Facultad",
          path: "/report/GraduatesPerFaculty"
        },
        {
          id: 1,
          name: "Egresados por Año",
          path: "/report/GraduatesPerYear"
        },
        {
          id: 2,
          name: "Egresados por Año y Facultad",
          path: "/report/GraduatesYearFaculty"
        }       
      ]
    };
  }
}
</script>

