<script setup>
import Tripcard from "./tripcard.component.vue";
</script>

<template>
  <div class="main-top">
    <h1>Mis viajes anteriores</h1>
    <pv-button style="background-color: #1E3A8A" >Exportar</pv-button>
  </div>
  <div class="main-body">
    <Tripcard />
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

</style>