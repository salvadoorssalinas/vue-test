<script>

import monthStatistic from "./month-statistic.component.vue";
import destinyStatistic from "./destiny-statistic.component.vue";
import DestinyStatistic from "./destiny-statistic.component.vue";

export default {
  name: 'App',
  components: {DestinyStatistic, monthStatistic,destinyStatistic },
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
      <month-statistic></month-statistic>
    </div>
    <div class="statistic-per-destiny" v-show="showDestinationStatistics">
      <destiny-statistic></destiny-statistic>
    </div>
  </div>



</template>

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





</style>