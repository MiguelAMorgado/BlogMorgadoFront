<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Blog de Miguel Angel Morgado Huerta</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home" active-class="active">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/create" active-class="active">Nueva Entrada</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
