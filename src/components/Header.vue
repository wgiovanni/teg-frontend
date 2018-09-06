<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mr-auto" href="/">
                <img src="../assets/rankings_logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                RANKING QS 
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav mx-auto">
                <!-- Authentication Links -->
                <router-link tag="li" to="/" class="nav-item">
                    <a class="nav-link">Estudiantes</a>
                </router-link>
                <router-link tag="li" to="/register" class="nav-item">
                    <a class="nav-link">Profesores</a>
                </router-link>
                    <router-link tag="li" to="/" class="nav-item">
                    <a class="nav-link">Egresados</a>
                </router-link>
                    <router-link tag="li" to="/" class="nav-item">
                    <a class="nav-link">Integración</a>
                </router-link>
                <router-link tag="li" to="/" class="nav-item">
                    <a class="nav-link">Reportes</a>
                </router-link>
                <router-link tag="li" to="/admin" class="nav-item">
                    <a class="nav-link">Administración</a>
                </router-link> 
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    
                    <a id="navbarDropdown" class="nav-link dropdown-toggle mr" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        Usuario<span class="caret"></span>
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
