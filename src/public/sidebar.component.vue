<script setup>
import {computed, ref, watch} from "vue";
import { defineProps } from "vue";
import { useStore } from 'vuex';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  toggleSidebar: {
    type: Function,
    default: () => {}
  }
});

const localVisible = ref(props.visible);
const togglesidebar = () => {
  localVisible.value = !localVisible.value;
  props.toggleSidebar();
};

let store = useStore();
let isClient = computed(() => store.state.isClient)

const logOut = () => {
  store.commit('setIsClient', 0);
  console.log(store.state.isClient);
};


</script>

<template>
  <pv-sidebar v-model:visible="localVisible" header="Menu">
    <template #header>
      <h1 class="sidebar-title">CargoApp</h1>
    </template>
    <template #closeicon>
      <i class="pi pi-times" style="font-size: 2rem; color: #686f75" @click="togglesidebar"/>
    </template>
    <ul>
      <li v-if="isClient === 1"><router-link to="/client/history">Record</router-link></li>
      <li v-if="isClient === 1"><router-link to="/client/expenses">Expenses</router-link></li>
      <li v-if="isClient === 1"><router-link to="/client/gps">GPS</router-link></li>
      <li v-if="isClient === 1"><router-link to="/client/statistics">Statistics</router-link></li>
      <li v-if="isClient === 2"><router-link to="/entrepreneur/register">Registry</router-link></li>
      <li v-if="isClient === 2"><router-link to="/entrepreneur/history">Record</router-link></li>
      <li v-if="isClient === 2"><router-link to="/entrepreneur/gps">GPS</router-link></li>
    </ul>
    <div v-if="isClient !== 0" class = "button-container">
      <router-link to="/home">
        <pv-button style="background-color: #1E3A8A; font-size: 24px; border-radius: 5px;" @click="logOut">
          Log Out
        </pv-button>
      </router-link>
    </div>
    <div v-if="isClient === 0">
      <p>Inicia sesión o regístrate para vivir la experiencia que ofrece CargoApp :)</p>
    </div>

  </pv-sidebar>
  <pv-toolbar id="toolbar-header">
    <template #start>
      <pv-button class="sidebar-button" @click="togglesidebar">
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

.sidebar-title {
  color: black;
}


</style>