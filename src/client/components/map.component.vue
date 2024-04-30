<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Trip } from "../models/trip.entity.js";
import {TripService} from "../services/trip.service.js";
import {OnGoingTripService} from "../services/ongoing-trip.service.js";
import { useRouter } from 'vue-router';

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
  setup(){
    const router = useRouter();

    const goToAlerts = (id) => {
      router.push(`/cliente/alertas/${id}`);
    }
    return{
      goToAlerts
    };
  },
  mounted() {
    const carIcon = L.icon({
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
  <div class="container">
    <div class="info-card">
      <pv-card>
        <template #content>
          <div class="content">
            <h1>Información del viaje</h1>
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
      <pv-button label="Alertas" class="btn" @click="goToAlerts(id)"></pv-button>
    </div>
    <div id="mapContainer"></div>
  </div>


</template>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.content{
  color: black;
}

.info-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p-card {
  background-color: #FFA500;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width: 70%;
  min-height: 500px;
  margin: 0 auto;
}

.btn{
  font-family: Rubik, sans-serif;
  background-color: #006400;
  border-radius: 15px;
  width: 25%;
  margin-top: -20px;
}

#mapContainer {
  height: calc(100vh - 81px);
}

</style>