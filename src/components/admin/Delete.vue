<template>
    <div>
        <h2>Eliminar usuario {{first_name}}</h2>
        <form @submit.prevent="deleteUser">
            <p>La acción no puede deshacerse.</p>
            <router-link to="/admin" tag="button" class="btn btn-primary">
                Cancelar
            </router-link>
            <button type="submit" class="btn btn-danger">Eliminar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Delete',
    data () {
        return {
            id: this.$route.params.id,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            error: false,
        }
    },
    methods: {
        findById () {
            const path = 'http://localhost:5000/user'.concat('/' + this.id);
            axios.get(path)
            .then(request => this.findByIdSuccess(request))
            .catch(() => console.log("Error Login"))
        },
        findByIdSuccess(request) {
            this.id = request.data.id;
            this.first_name = request.data.first_name;
            this.last_name = request.data.last_name;
            this.email = request.data.email;
            this.password = request.data.password;
        },
        deleteUser () {
            const path = 'http://localhost:5000/user/' + this.id;
            axios.delete(path)
                .then(request => this.userSuccessful(request))
                .catch(() => this.userFailed())
        },
        userSuccessful (req) {
            this.$router.replace(this.$route.query.redirect || '/admin')
        },
        userFailed () {
            this.error = 'User failed!'
        }
    },
    created () {
        this.findById();
    }
}
</script>

