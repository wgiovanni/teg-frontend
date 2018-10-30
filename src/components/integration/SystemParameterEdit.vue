<template>
    <div>
        <div class="container">
            <form class="col s12" @submit.prevent="save">
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group row">
                <label for="codigo" class="col-sm-4 col-form-label text-md-right">Código</label>
                <div class="col-md-6">
                  <input v-model="codigo" type="text" id="codigo" class="form-control" placeholder="Código" readonly>
                </div>
              </div>            
              <div class="form-group row">
                <label for="nombre" class="col-sm-4 col-form-label text-md-right">Nombre</label>
                <div class="col-md-6">
                  <input v-model="nombre" type="text" id="nombre" class="form-control" placeholder="Nombre" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="descripcion" class="col-sm-4 col-form-label text-md-right">Nombre de usuario</label>
                <div class="col-md-6">
                  <input v-model="descripcion" type="text" id="descripcion" class="form-control" placeholder="Descripción" required>
                </div>
              </div>
              <div class="form-group row">
                <label for="definicion" class="col-sm-4 col-form-label text-md-right">Nombre de usuario</label>
                <div class="col-md-6">
                  <input v-model="definicion" type="text" id="definicion" class="form-control" placeholder="Definición" required>
                </div>
              </div>
              <div class="form-group row col-md-8">
                <a class="btn btn-danger" type="button" href="/integration">Cancelar</a>
                <button class="btn btn-primary" type="submit">Guardar</button>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SystemParameterEdit',
   data () {
    return {
        id: this.$route.params.id,
        nombre: '',
        codigo: '',
        descripcion: '',
        definicion: '',
		    error: false
    }
  },
   methods: {
    save: function () {
    const path = 'http://localhost:5000/parametroSistema' + '/' + this.id;
    axios.put(path, {
      id: this.id, 
      codigo: this.codigo, 
      nombre: this.nombre, 
      descripcion: this.descripcion, 
      definicion: this.definicion
      })
        .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
      this.$router.replace(this.$route.query.redirect || '/integration')
    },
    failed () {
      this.error = 'System Parameter failed!'
    },
    findById () {
        const path = 'http://localhost:5000/parametroSistema'.concat('/' + this.id);
        axios.get(path)
        .then(request => this.findByIdSuccess(request))
        .catch(() => console.log("Error FINDBYID"))
    },
    findByIdSuccess(request) {
        this.id = request.data.id;
        this.codigo = request.data.codigo;
        this.nombre = request.data.nombre;
        this.descripcion = request.data.descripcion;
        this.definicion = request.data.definicion;           
    }
  },
  created () {
      this.findById();
  }
}
</script>
