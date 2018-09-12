<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Usuarios / Roles</span>
            </h6>  
            <ul class="nav flex-column">
                <router-link tag="li" to="/admin" class="nav-item">
                <a class="nav-link">
                    <i class="material-icons">people</i>
                    Administrar Usuarios
                </a>
            </router-link>
            <router-link tag="li" to="/admin" class="nav-item">
                <a class="nav-link">
                    Administrar Roles
                </a>
            </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

