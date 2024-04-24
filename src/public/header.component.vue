<script>
import Toolbar from "primevue/toolbar";

export default {
  name: "header-toolbar",
  components: {
    Toolbar
  },
  props: {
    toggleSidebar: Function
  }
}
</script>

<template>
  <pv-toolbar id="toolbar-header">
    <template #start>
      <pv-button class="sidebar-button" @click="toggleSidebar">
        <i class="pi pi-bars" style="font-size: 2rem; color: white" />
      </pv-button>
    </template>
    <template #center>
      <img src="../assets/images/logo.png" alt="CargoApp logo">
      <h1>CargoApp</h1>
    </template>
    <template #end>
      <pv-button class="config-button">
        <i class="pi pi-cog" style="font-size: 2rem; color: white" />
      </pv-button>
    </template>
  </pv-toolbar>
</template>

<style scoped>

  #toolbar-header{
    background-color: #1E3A8A;
    border : none;
    border-radius: 0;
    padding: 0;
  }

  .config-button {
    background-color: transparent;
    border: none;
    margin-right: 50px;
  }

  .sidebar-button {
    background-color: transparent;
    border: none;
    margin-left: 10px;
  }

  img {
    height: 50px;
    margin-right: 10px;
  }
  h1 {
    font-family: Rubik, sans-serif;
    font-weight: normal;
    color: white;
    font-size: 32px;
  }


</style>