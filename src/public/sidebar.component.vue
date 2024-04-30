<script setup>
import { ref, watch} from "vue";

const props = defineProps({
  visible: Boolean,
  isClient: Boolean
});

const localVisible = ref(props.visible);
const isClient = true;

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

      <li v-if="isClient"><router-link to="/cliente/historial">Record</router-link></li>
      <li v-if="isClient"><router-link to="/cliente/gastos">Expenses</router-link></li>
      <li v-if="isClient"><router-link to="/cliente/gps">GPS</router-link></li>
      <li v-if="isClient"><router-link to="/cliente/estadisticas">Statistics</router-link></li>
      <li v-if="!isClient"><router-link to="/empresario/registro">Registry</router-link></li>
      <li v-if="!isClient"><router-link to="/empresario/historial">Record</router-link></li>
      <li v-if="!isClient"><router-link to="/empresario/gps">GPS</router-link></li>
    </ul>
    <div class = "button-container">
      <pv-button style="background-color: #1E3A8A; font-size: 24px; border-radius: 5px;">
        Log Out</pv-button>
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