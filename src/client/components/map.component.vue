
<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Trip } from "../models/trip.entity.js";
import {TripService} from "../services/trip.service.js";

export default defineComponent({
  name: 'LMap',
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  data() {
    return {
      api: new TripService(),
      trip: Trip
    }
  },
  created(){
    this.api.getTripByID(this.id).then(response => {
      this.trip = new Trip(
          response.data[0].id,
          response.data[0].name,
          response.data[0].cargo.loadDate,
          response.data[0].cargo.unloadDate,
          response.data[0].cargo.loadLocation,
          response.data[0].cargo.unloadLocation,
          response.data[0].driver.fullName,
          response.data[0].vehicle.plate,
          response.data[0].vehicle.tractorPlate,
          response.data[0].company.name,
          response.data[0].company.ruc,
          response.data[0].company.logoImage
      );
    });
  },

  setup () {
    let map = null

    onMounted(() => {
      createMapLayer()
    })
    onBeforeMount(() => {
      if (map) {
        map.remove()
      }
    })

    const createMapLayer = () => {
      map = L.map('mapContainer').setView([-9.190003, -75.015152], 6)
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  }
})
</script>
<template>
  <div id="mapContainer"></div>
  <main>
  <pv-card class="info-card">
    <template #content>
      <div class="content-info-preview">
        <h1>Información del Viaje</h1>
        <p><strong>Conductor:</strong> {{ trip.conductor }}</p>
        <p><strong>Trailer:</strong> {{ trip.placaCarreta }}</p>
        <p><strong>Tractor:</strong> {{ trip.placaTracto }}</p>
        <p><strong>Peso:</strong> <!-- Espacio para el peso --></p>
        <p><strong>Volumen:</strong> <!-- Espacio para el volumen --></p>
        <p><strong>Distancia:</strong> <!-- Espacio para la distancia --></p>
        <p><strong>Tiempo estimado:</strong> <!-- Espacio para el tiempo estimado --></p>
      </div>
    </template>
  </pv-card>
  </main>
</template>

<style scoped>
  #mapContainer {
    position: fixed;
    top: 80px;
    right: 0;
    width: 50%;
    height: calc(100vh - 50px);
  }
  main {
    margin: 40px 0px 4px auto;
    font-family: "Roboto", sans-serif;
    width: 75%;
    display: flex;
    flex-direction: column;
  }

  .info-card {
    background-color: #FFA500;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    height: auto;
    max-width: 350px;
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 20px;
    font-family: "Roboto", sans-serif;
    z-index: 1000;
  }

  .content-info-preview {
    position: static;
    margin: 0;
  }

  @media (max-width: 1050px) {
    main {
      margin: 40px 2px 4px 110px;
      width: 100%;
    }
  }

  @media (max-width: 750px) {
    main {
      margin: 40px 2px 4px 0;
      width: 100%;
    }
    .content-info-preview {
      margin: -94px 15px 0 210px;
    }
  }

  @media (max-width: 450px) {
    .title {
      margin-bottom: 30px;
    }
    .content-info-preview {
      margin: -120px 15px 0 170px;
    }
  }
</style>