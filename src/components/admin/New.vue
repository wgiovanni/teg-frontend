<template>
    <Modal v-show="show" @close="close">
        <div class="modal-header">
            <h3>New Post</h3>
        </div>

        <div class="modal-body">
            <label class="form-label">
                Nombre
                <input v-model="first_name" class="form-control">
            </label>
            <label class="form-label">
                Apellido
                <input v-model="last_name" class="form-control">
            </label>
            <label class="form-label">
                Correo Electrónico
                <input v-model="email" class="form-control">
            </label>
            <label class="form-label">
                Contraseña
                <input v-model="password" class="form-control">
            </label>
        </div>

        <div class="modal-footer text-right">
            <button class="btn btn-primary" @click="savePost()">
                Save
            </button>
        </div>
    </Modal>
</template>

<script>
import axios from 'axios';
import Modal from '@/components/layout/Modal'

export default {
    name: 'NewUsers',
    components: {
        Modal
    },
    props: ['show'],
    data: function () {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        savePost: function () {
        const path = 'http://localhost:5000/user';
        axios.post(path, { first_name: this.first_name, last_name: this.last_name, email: this.email, password: this.password })
            .then(request => this.userSuccessful(request))
            .catch(() => this.userFailed())
            this.close();
        },
        close: function () {
            this.$emit('close');
            this.first_name = '';
            this.last_name = '';
            this.email = '';
            this.password = '';
        },
        save () {
        
        },
        userSuccessful (req) {
        console.log(this.first_name)
        console.log(this.last_name)
        console.log(this.email)
        console.log(this.password)
        console.log(req)
        this.$parent.usersAll(); //Esta linea actualiza la tabla de usuarios en caso de que se ingrese un nuevo usuario.
        //this.$router.replace(this.$route.query.redirect || '/Admin2')
        },
        userFailed () {
        this.error = 'User failed!'
        console.log("User Login")
        /*this.$store.dispatch('logout')
        delete localStorage.*/
        }
    }
}
</script>

<style>
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label > .form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

