<script setup>
import { ref } from "vue";
import HeaderToolbar from "./public/header.component.vue";
import Sidebar from "./public/sidebar.component.vue";

const visible = ref(false);

const toggleSidebar = () => {
  visible.value = !visible.value;
};

</script>

<template>
  <header-toolbar :toggleSidebar="toggleSidebar"/>
  <sidebar :visible="visible" />
  <router-view></router-view>
</template>

<style scoped>
</style>
