<template>
  <div class="title-bar">
    <h1>Estadisticas</h1>
  </div>

  <div class="main-bar">
    <div>
      <button
          @click="toggleMonthStatistics"
          :style="{ backgroundColor: showMonthStatistics ? '#9AABDE' : 'white' }"
      >
        Mostrar estadísticas por mes
      </button>
      <button
          @click="toggleDestinationStatistics"
          :style="{ backgroundColor: showDestinationStatistics ? '#9AABDE' : 'white' }"
      >
        Mostrar estadísticas por destino
      </button>
    </div>

    <div class="statistic-per-month" v-show="showMonthStatistics">
      <estadistica-por-mes-component/>
    </div>
    <div class="statistic-per-destiny" v-show="showDestinationStatistics">
      <statistics-per-destiny/>
    </div>
  </div>



</template>

<script>

import estadisticaPorMesComponent from "./estadistica-por-mes.component.vue";
import statisticsPerDestiny from "./statistics-per-destiny.vue";

export default {
  name: 'App',
  components: { estadisticaPorMesComponent,statisticsPerDestiny },
  data() {
    return {
      showMonthStatistics: true, // Mostrar estadísticas por mes por defecto
      showDestinationStatistics: false,
    };
  },
  methods: {
    toggleMonthStatistics() {
      this.showMonthStatistics = !this.showMonthStatistics;
      if (this.showMonthStatistics) {
        this.showDestinationStatistics = false;
      }
    },
    toggleDestinationStatistics() {
      this.showDestinationStatistics = !this.showDestinationStatistics;
      if (this.showDestinationStatistics) {
        this.showMonthStatistics = false;
      }
    },
  },
}
</script>

<style>
  .title-bar {
    margin-left: 20px;
  }

  .main-bar {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .statistic-per-month {
    width: 60%;
  }

  .statistic-per-destiny {
    width: 60%;

  }

  button {
    color: black;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }




</style>