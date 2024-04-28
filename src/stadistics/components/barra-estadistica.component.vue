<template>
  <h1>Estadisticas</h1>
  <div class="estadis">
    <estadistica-por-mes-component/>
  </div>


</template>

<script>

import estadisticaPorMesComponent from "./estadistica-por-mes.component.vue";

export default {
  name: 'App',
  components: { estadisticaPorMesComponent }
}
</script>

<style>
  .estadis {
    width: 80%
  }
</style>