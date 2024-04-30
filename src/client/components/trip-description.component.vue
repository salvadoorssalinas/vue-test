<script>
import { TripService } from '../services/trip.service.js';
import { Trip } from '../models/trip.entity.js';

export default {
  name: "trip-description",
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  data() {
    return {
      trip: Trip,
      tripService: new TripService()
    }
  },
  created() {
    this.tripService.getTripByID(this.id).then(response => {
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
          response.data[0].cargo.loadImage
      );
    });
  }
}
</script>

<template>
  <div class="container-general">
    <div class="evidence">
      <h2>Evidence</h2>
      <img :src="trip.evidencia" width="400">
    </div>
    <div class="container-info-general">
      <h1>{{ trip.nombre }}</h1>
      <div class="container-info">
        <p>
          <strong>LOAD DATE:</strong>
          {{ trip.fechaCarga }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>UNLOAD DATE:</strong>
          {{ trip.fechaDescarga }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>LOAD LOCATION:</strong>
          {{ trip.lugarCarga }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>UNLOAD LOCATION:</strong>
          {{ trip.lugarDescarga }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>DRIVER:</strong>
           {{ trip.conductor }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>PLATE:</strong>
          {{ trip.placaCarreta }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>TRACTOR PLATE: </strong>
          {{ trip.placaTracto }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>COMPANY:</strong>
           {{ trip.empresa }}
        </p>
      </div>
      <div class="container-info">
        <p>
          <strong>RUC: </strong>
          {{ trip.ruc }}
        </p>
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