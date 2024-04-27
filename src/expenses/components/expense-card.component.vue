<script>
import { Expense } from "../model/expense.entity.js";
import { Trip } from "../../history/model/trip.entity.js";
import {useRouter} from "vue-router";
export default {
  name: "expense-card",
  props: {
    trip : {
      type: Trip,
      required: true
    },
  },
  setup(){
    const router = useRouter();
    const goToExpenses = (id) => {
      router.push(`/gastos/${id}`);
    }
    return{
      goToExpenses
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
}
</script>

<template>
  <pv-card>
    <template #title>
      <h2>Viaje {{ trip.id }}</h2>
    </template>
    <template #content>
      <div class="container">
        <div class="carga">
          <p>FECHA DE CARGA: {{ formatDate(trip.fechaCarga) }}</p>
          <p>LUGAR DE CARGA: {{ trip.lugarCarga }}</p>
        </div>
        <div class="descarga">
          <p>FECHA DE DESCARGA: {{ formatDate(trip.fechaDescarga) }}</p>
          <p>LUGAR DE DESCARGA: {{ trip.lugarDescarga }}</p>
        </div>
      </div>
    </template>
    <template #footer>
      <pv-button class="pv-button" @click="goToExpenses(trip.id)">Ver gastos</pv-button>
    </template>
  </pv-card>
</template>

<style scoped>
  .p-card{
    background-color: #FFA500;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  h2{
    font-size: 36px;
    color: black;
  }
  p{
    font-size: 24px;
    font-weight: lighter;
    color: black;
  }

  .pv-button {
    background-color: green;
    border-radius: 15px;
    width: 20%;
    font-size: 24px;
    font-family: Rubik, sans-serif;
    font-weight: 500;
    display: block;
    margin: auto;
  }

  @media screen and (max-width: 1000px){
    .container{
      grid-template-columns: 1fr;
    }
  }
</style>