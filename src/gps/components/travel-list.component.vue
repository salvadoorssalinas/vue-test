<script>
import {Trip} from "../model/trip.entity.js";
import {TravelService} from "../services/travel.service.js";
import TravelCard from "./travel-card.component.vue";

export default {
  name: "travellist.component",
  components: {
    TravelCard
  },
  data() {
    return {
      api: new TravelService(),
      trips: [],
      trip: Trip,
      filteredTrips: [],
    }
  },
  created() {
    this.api.getTravels().then(response => {
      this.trips = response.data.map(trip => new Trip(
          trip.id,
          trip.name,
          trip.load.date,
          trip.unload.date,
          trip.load.location,
          trip.unload.location,
          trip.driver,
          trip.vehicle.trailerPlate,
          trip.vehicle.tractorPlate,
      ));
      this.filteredTrips = this.trips;
    });
  }
}

</script>

<template>
  <div class="main-top">
    <h1>Ver viajes en progreso</h1>
  </div>
  <div class="main-body">
    <travel-card v-for="trip in filteredTrips" :trip="trip"/>
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.search-bar input {
  width: 650px;  /* adjust as needed */
  height: 45px;
}
@media (min-width: 1550px) {
}
</style>