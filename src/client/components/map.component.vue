
<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Trip } from "../models/trip.entity.js";
import {TripService} from "../services/trip.service.js";
import {OnGoingTripService} from "../services/ongoing-trip.service.js";

export default defineComponent({
  name: 'LMap',
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  data() {
    return {
      tripAPI: new TripService(),
      onGoingTripAPI: new OnGoingTripService(),
      trip: Trip,
      conductor: '',
      placa : '',
      carga: '',
      velocidad: 0,
      distancia: 0,
      latitud: 0,
      longitud: 0
    }
  },
  created(){

  },
  mounted() {
    var carIcon = L.icon({
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png",
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50]
    });

    this.tripAPI.getTripByID(this.id).then(response => {
      this.conductor = response.data[0].driver.fullName;
      this.placa = response.data[0].vehicle.plate;
      this.carga = response.data[0].cargo.weight;
    });
    this.onGoingTripAPI.getTripByID(this.id).then(response => {
      console.log(response.data[0]);
      this.velocidad = response.data[0].speed;
      this.distancia = response.data[0].distance;
      this.latitud = response.data[0].latitude;
      this.longitud = response.data[0].longitude;

      const map = L.map('mapContainer').setView([this.latitud, this.longitud], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      L.marker([this.latitud, this.longitud], {icon: carIcon}).addTo(map)
          .bindPopup('Ubicación actual')
          .openPopup();
    });

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
        <p><strong>Conductor:</strong> {{ conductor }}</p>
        <p><strong>Placa:</strong> {{ placa }}</p>
        <p><strong>Peso:</strong> {{ carga }} kg</p>
        <p><strong>Velocidad:</strong> {{ velocidad }} km/h</p>
        <p><strong>Distancia:</strong> {{ distancia }} km</p>
        <p><strong>Latitud:</strong> {{ latitud }}</p>
        <p><strong>Longitud:</strong> {{ longitud }}</p>
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