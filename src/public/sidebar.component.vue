<script setup>
import { ref, watch, defineProps} from "vue";

const props = defineProps({
  visible: Boolean,
});

const localVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
  localVisible.value = newValue;
});
</script>

<template>
  <pv-sidebar v-model:visible="localVisible" header="Menu">
    <template #header>
      <h1 id="sidebar-title">CargoApp</h1>
    </template>
    <template #closeicon>
      <i class="pi pi-times" style="font-size: 2rem; color: #686f75" />
    </template>
    <ul>
      <li><router-link to="/historial">Historial</router-link></li>
      <li><router-link to="/gastos">Gastos</router-link></li>
      <li><router-link to="/gps">GPS</router-link></li>
      <li><router-link to="/estadisticas">Estadísticas</router-link></li>
    </ul>
    <div class = "button-container">
      <pv-button style="background-color: #1E3A8A; font-size: 24px; border-radius: 5px;">
        Cerrar Sesión</pv-button>
    </div>



  </pv-sidebar>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  padding-top: 100px;
}

ul li {
  display: flex;
  align-items: center;
  justify-content: left;
  list-style-type: none;
}

ul li a{
  font-size: 24px;
  text-decoration: none;
  color: #495057;
}

ul li a:hover{
  color: #1E3A8A;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  height: 50px;
}

</style>