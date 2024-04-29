<script>
import { TripService } from '../services/trip.service.js';
import { Trip } from '../models/trip.entity.js';
import TripCard from "./trip-card.component.vue";

export default {
  name: "trip-list",
  components: {
    TripCard
  },
  data() {
    return {
      api: new TripService(),
      trips: [],
      trip: Trip,
      selectedFilter: null,
      filters: [
        { name: 'Name', value: 'name' },
        { name: 'Date', value: 'date' },
        { name: 'Place', value: 'place' },
      ],
      searchText: '',
      filteredTrips: [],
    }
  },
  created() {
    this.api.getTrips().then(response => {
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
  },
  methods: {
    filterTrips() {
      if (!this.selectedFilter && !this.searchText) {
        this.filteredTrips = this.trips;
        return;
      }

      let filterValue = this.selectedFilter ? this.selectedFilter.value : null;
      let searchText = this.searchText ? this.searchText.toLowerCase() : null;

      this.filteredTrips = this.trips.filter(trip => {
        if (filterValue && searchText) {
          let tripProperty;
          switch (filterValue) {
            case 'name':
              tripProperty = trip.nombre;
              break;
            case 'date':
              tripProperty = trip.fechaCarga;
              break;
            case 'place':
              tripProperty = trip.lugarCarga;
              break;
            default:
              return true;
          }
          return tripProperty ? tripProperty.toLowerCase().includes(searchText) : false;
        } else if (filterValue) {
          return trip.hasOwnProperty(filterValue);
        } else if (searchText) {
          return Object.values(trip).some(val => String(val).toLowerCase().includes(searchText));
        }
        return true;
      });
    }
  }
}

</script>

<template>
  <div class="main-top">
    <h1>Mis viajes anteriores</h1>
    <pv-button style="background-color: #006400" >Exportar</pv-button>
  </div>

  <div class="container-search-bar">
    <div class="search-bar">
      <input type="text" v-model="searchText" placeholder="Buscar viaje" />
    </div>
    <div class="buttons-group">
      <pv-button @click="filterTrips" style="background-color: transparent; border: none; color: black;">
        <i class="pi pi-search"></i>
      </pv-button>


      <div class="dropdown-container">
        <pv-dropdown v-model="selectedFilter" :options="filters" optionLabel="name" placeholder="Select a filter" class="w-full md:w-14rem">
        </pv-dropdown>
      </div>
    </div>
  </div>


  <div class="main-body">
    <trip-card v-for="trip in filteredTrips" :trip="trip"/>
  </div>

</template>

<style scoped>
.main-top{
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
}

h1{
  font-size: 48px;
  font-family: Roboto, sans-serif;
}

.p-button{
  height: 50px;
  margin: auto 0;
}
.container-search-bar {
  display: flex;
  text-align: center;
  justify-content: center;
}

.search-bar input {
  font-family: Roboto, sans-serif;
  font-size: 24px;
  width: 650px;
  height: 45px;
  padding: 10px;
  border: black 1px solid;
  border-radius: 5px;
}

.buttons-group {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
}

@media (min-width: 1550px) {
  .container-search-bar {
    justify-content: normal;
    margin-left: 500px;
  }
}



</style>