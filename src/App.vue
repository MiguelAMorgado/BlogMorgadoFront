<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

export default {

  components: {
    Navbar,
  }
}

</script>

<style>

</style>
