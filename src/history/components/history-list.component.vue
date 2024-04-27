<script>
import { TripService } from '../services/trip.service.js';
import { Trip } from '../model/trip.entity.js';
import Tripcard from "./trip-card.component.vue";

export default {
  name: "historylist.component",
  components: {
    Tripcard
  },
  data() {
    return {
      api: new TripService(),
      trips: [],
      trip: Trip
    }
  },
  created() {
    this.api.getTrips().then(response => {
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
          trip.company.name,
          trip.company.ruc,
          trip.company.logoUrl
      ));
    });
  }
}

</script>

<template>
  <div class="main-top">
    <h1>Mis viajes anteriores</h1>
    <pv-button style="background-color: #1E3A8A" >Exportar</pv-button>
  </div>
  <div class="main-body">
    <Tripcard v-for="trip in trips" :trip="trip"/>
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

</style>