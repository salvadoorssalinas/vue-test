<script>
import { TripService } from '../services/trip.service.js';
import { Trip } from '../model/trip.entity.js';

export default {
  name: "details-trip.component",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      api: new TripService(),
      trip: Trip
    }
  },
  created() {
    this.api.getTripByID(this.id).then(response => {
      this.trip = new Trip(
          response.data.id,
          response.data.name,
          response.data.load.date,
          response.data.unload.date,
          response.data.load.location,
          response.data.unload.location,
          response.data.driver,
          response.data.vehicle.trailerPlate,
          response.data.vehicle.tractorPlate,
          response.data.company.name,
          response.data.company.ruc,
          response.data.company.logoUrl
      );
    });
  }
}
</script>

<template>
  <div class="container-general">
    <img :src="trip.imagenEmpresa" width="250" >
    <div class="container-info-general">
      <h1>{{ trip.nombre }}</h1>
      <div class="container-info">
        <p>FECHA DE CARGA: {{ trip.fechaCarga }}</p>
      </div>
      <div class="container-info">
        <p>FECHA DE DESCARGA: {{ trip.fechaDescarga }}</p>
      </div>
      <div class="container-info">
        <p>LUGAR DE CARGA: {{ trip.lugarCarga }}</p>
      </div>
      <div class="container-info">
        <p>LUGAR DE DESCARGA: {{ trip.lugarDescarga }}</p>
      </div>
      <div class="container-info">
        <p>CONDUCTOR: {{ trip.conductor }}</p>
      </div>
      <div class="container-info">
        <p>PLACA DE CARRETA:{{ trip.placaCarreta }}</p>
      </div>
      <div class="container-info">
        <p>PLACA DE TRACTO: {{ trip.placaTracto }}</p>
      </div>
      <div class="container-info">
        <p>EMPRESA: {{ trip.empresa }}</p>
      </div>
      <div class="container-info">
        <p>RUC: {{ trip.ruc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-general {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container-general img {
  margin-right: 200px;
}

.container-general h1 {
  text-align: center;
}
.container-info-general {
  display: flex;
  flex-direction: column;
}
.container-info {
  background-color: #FFA500;
  width: 721px;
  margin-bottom: 10px;
}

.container-info p {
  padding: 0 10px;
}
</style>