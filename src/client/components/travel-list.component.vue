<script>
import {Trip} from "../models/trip.entity.js";
import {TripService} from "../services/trip.service.js";
import TravelCard from "./travel-card.component.vue";

export default {
  name: "travellist.component",
  components: {
    TravelCard
  },
  data() {
    return {
      tripAPI: new TripService(),
      trips: [],
      trip: Trip,
      filteredTrips: [],
    }
  },
  created() {
    this.tripAPI.getTrips().then(response => {
      this.trips = response.data.map(trip => new Trip(
          trip.id,
          trip.name,
          trip.cargo.loadDate,
          trip.cargo.unloadDate,
          trip.cargo.loadLocation,
          trip.cargo.unloadLocation,
          trip.driver.fullName,
          trip.vehicle.plate,
          trip.vehicle.tractorPlate,
          trip.company.name,
          trip.company.ruc,
          trip.company.logoImage
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
  <div class="list">
    <travel-card v-for="trip in filteredTrips" :trip="trip"/>
  </div>

</template>

<style scoped>
h1{
  text-align: center;
  font-size: 48px;
}

.list{
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
</style>