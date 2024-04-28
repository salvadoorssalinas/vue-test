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
    <Tripcard v-for="trip in filteredTrips" :trip="trip"/>
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.container-search-bar {
  display: flex;
  text-align: center;
  justify-content: center;
}

.search-bar input {
  width: 650px;  /* adjust as needed */
  height: 45px;
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