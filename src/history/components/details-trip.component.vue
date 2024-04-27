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
  <div>
    <h1>{{ trip.nombre }}</h1>
    <img :src="trip.imagenEmpresa" width="100" >
    <p>FECHA DE CARGA: {{ trip.fechaCarga }}</p>
    <p>FECHA DE DESCARGA: {{ trip.fechaDescarga }}</p>
    <p>LUGAR DE CARGA: {{ trip.lugarCarga }}</p>
    <p>LUGAR DE DESCARGA: {{ trip.lugarDescarga }}</p>
    <p>CONDUCTOR: {{ trip.conductor }}</p>
    <p>PLACA DE CARRETA:{{ trip.placaCarreta }}</p>
    <p>PLACA DE TRACTO: {{ trip.placaTracto }}</p>
    <p>EMPRESA: {{ trip.empresa }}</p>
    <p>RUC: {{ trip.ruc }}</p>
  </div>
</template>

<style scoped>
/* Aquí puedes agregar tus estilos */
</style>