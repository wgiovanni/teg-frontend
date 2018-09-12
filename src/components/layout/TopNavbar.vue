<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mr-auto" href="/">
            <img src="../../assets/rankings_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            RANKING QS 
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
            <ul class="navbar-nav mx-auto">
                <!-- Enlaces para navegacion -->
                <router-link tag="li" class="nav-item" 
                v-for="link in links" 
                v-bind:key="link.id" 
                :to="`${link.path}`"><a class="nav-link">{{link.name}}</a></router-link> 
                <!--li  class="nav-item">
                    <a class="nav-link" href="/">{{myProp}}</a>
                </li-->
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte izquierdo del Narbar -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    
                    <a id="navbarDropdown" class="nav-link dropdown-toggle mr" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        <i class="material-icons">person</i>Usuario<span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="">
                            Salir
                        </a>
                    </div>
                </li>   
            </ul>          
        </div>
    </nav>
</template>
<script>
export default {
    name: 'TopNavbar',
    data() {
        return {
            links: [
                {
                    id: 0,
                    name: 'Estudiantes',
                    path: '/students'
                },
                {
                    id: 0,
                    name: 'Profesores',
                    path: '/teachers'
                },
                {
                    id: 0,
                    name: 'Egresados',
                    path: '/graduates'
                },
                {
                    id: 0,
                    name: 'Integración',
                    path: '/integration'
                },
                {
                    id: 0,
                    name: 'Reportes',
                    path: '/reports'
                },
                {
                    id: 0,
                    name: 'Administración',
                    path: '/admin'
                }
            ]
        }
    }
}
</script>
