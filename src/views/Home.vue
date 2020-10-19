<template>
  <div class="container">
    <br>
    <div class="row mt-5">
      <div v-for="entrada of entradas" :key="entrada.IdEntrada" class="col-12 card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="entrada.rutaImagen" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ entrada.titulo }}</h5>
              <p class="card-text text-wrap">{{ entrada.texto }}</p>
              <div>
                <span class="badge badge-primary">{{ entrada.palabrasOfensivas }} palabras ofensivas</span> &nbsp;
                <span class="badge badge-info">{{ obtenerPorcentaje(entrada.clasificacionImagen) }}% de contenido adulto en imagen</span>&nbsp;
                <span class="badge badge-secondary">{{ obtenerPorcentaje(entrada.clasificacion1) }}% de contenido sexual en el texto</span>&nbsp;
                <span class="badge badge-warning">{{ obtenerPorcentaje(entrada.clasificacion2) }}% de insinuación sexual en el texto</span>&nbsp;
                <span class="badge badge-danger">{{ obtenerPorcentaje(entrada.clasificacion3) }}% de contenido ofensivo en el texto</span>&nbsp;
              </div>
              <p class="card-text"><small class="text-muted">{{ entrada.autor }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('cargarEntradas');
  },
  computed: {
    entradas() {
      return this.$store.getters.getEntradas;
    }
  },
  methods: {
    obtenerPorcentaje(numero) {
      const num = (numero * 100) / 1;
      return num.toFixed(2);
    }
  },
}
</script>

<style scoped>

</style>
