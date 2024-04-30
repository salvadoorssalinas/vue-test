<script setup>
import { ref } from "vue";
import HeaderToolbar from "./public/header.component.vue";
import Sidebar from "./public/sidebar.component.vue";
import UserComponent from "./public/user.component.vue"; // Asegúrate de que la ruta sea correcta



const visible = ref(false);

const toggleSidebar = () => {
  visible.value = !visible.value;
};

</script>

<template>
  <header-toolbar :toggleSidebar="toggleSidebar"/>
  <sidebar :visible="visible" />
  <user-component :visible="visible" :isClient="true" />
  <router-view></router-view>
</template>

<style scoped>
</style>
