<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="jumbotron">
          <h1 class="display-4">Crea una nueva entrada del Blog!</h1>
          <p class="lead">Recuerda que cada entrada del post es clasificada según el contenido de su imagen y texto.</p>
          <hr class="my-4">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 form-group">
        <label for="autor">Autor</label>
        <input
            type="text"
            class="form-control"
            id="autor"
            placeholder="Autor"
            :class="{'is-invalid': errores.errorAutor.length > 0}"
            v-model="autor"
        >
        <div class="invalid-feedback">
          {{ errores.errorAutor }}
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="titulo">Titulo</label>
        <input
            type="text"
            class="form-control"
            id="titulo"
            placeholder="Titulo"
            :class="{'is-invalid': errores.errorTitulo.length > 0}"
            v-model="titulo"
        >
        <div class="invalid-feedback">
          {{ errores.errorTitulo }}
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="texto">Texto</label>
        <textarea
            class="form-control"
            id="texto" rows="3"
            :class="{'is-invalid': errores.errorText.length > 0}"
            v-model="texto"
        ></textarea>
        <div class="invalid-feedback">
          {{ errores.errorText }}
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="exampleFormControlFile1">Imagen</label>
        <br>
        <button id="falseinput" @click="falseInputClick" class="btn btn-primary">Elegir archivo</button>
        <span id="selected_filename">Ningún archivo seleccionado</span>
        <input style="display:none;" type="file" @change="fileChange($event)" class="form-control-file" id="exampleFormControlFile1">
        <div
            class="alert alert-danger"
            role="alert"
            v-if="errores.errorImagen.length > 0"
        >
          {{ errores.errorImagen }}
        </div>
      </div>
      <div class="col-12">
        <br>
        <button @click="upload" class="btn btn-primary btn-block">Registrar Entrada</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autor: '',
      titulo: '',
      texto: '',
      errores: {
        errorAutor: '',
        errorTitulo: '',
        errorText: '',
        errorImagen: '',
      }
    }
  },
  methods: {
    async upload() {
      let data = new FormData();
      const files = document.getElementById('exampleFormControlFile1');
      const file = files.files[0];
      let valido = true;
      if (this.autor === '') {
        this.errores.errorAutor = 'Debes ingresar el nombre de autor.';
        valido = false;
      }
      if (this.titulo === '') {
        this.errores.errorTitulo = 'Debes ingresar el titulo de la entrada.';
        valido = false;
      }
      if (this.texto === '') {
        this.errores.errorText = 'Debes ingresar el texto de la entrada.';
        valido = false;
      }
      if (file === undefined) {
        this.errores.errorImagen = 'Debes seleccionar una imagen.';
        valido = false;
      }

      if (valido === true) {
        data.append('file', file);
        data.append('autor', this.autor);
        data.append('titulo', this.titulo);
        data.append('texto', this.texto);

        await this.$store.dispatch('subirEntrada', data);
      }
    },
    falseInputClick() {
      document.getElementById('exampleFormControlFile1').click();
    },
    fileChange(event) {
      console.log(event.target.files[0]);
      document.getElementById('selected_filename').innerText = event.target.files[0].name;
    }
  }
}
</script>

<style scoped>

</style>
