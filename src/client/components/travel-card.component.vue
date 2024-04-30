<script>
import {Trip} from "../models/trip.entity.js"
import {useRouter} from "vue-router";

export default {
  name: "travel-card",
  props: {
    trip: {
      type: Trip,
      required: true
    }
  },
  setup(){
    const router = useRouter();
    const goToGPS = (id) => {
      router.push(`/cliente/GPS/${id}`);
    }
    return{
      goToGPS
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
}

</script>

<template>
  <div class="travel">
    <pv-card class="travel-card">
      <template #content>
        <div class="title">
          <h2>{{trip.nombre}}</h2>
        </div>
        <div class="content-info-preview">
          <p>FECHA DE CARGA: {{ formatDate(trip.fechaCarga) }}</p>
          <p>LUGAR DE CARGA: {{ trip.lugarCarga }}</p>
        </div>
      </template>
    </pv-card>
    <pv-button label="Ver GPS" class="btn" @click="goToGPS(trip.id)"></pv-button>
  </div>
</template>

<style scoped>
h2{
  color: black;
  font-family: Roboto, sans-serif;
}
p{
  color: black;
  font-family: Roboto, sans-serif;
}

.travel-card {
  background-color: #FFA500;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.content-info-preview {
  position: absolute;
  margin: -94px 15px 0 170px;
}

.btn {
  font-family: Rubik, sans-serif;
  background-color: #006400;
  border-radius: 15px;
  width: 25%;
  max-width: 320px;
  margin-left: calc(50% - 160px);
  margin-top: -20px;
}


</style>