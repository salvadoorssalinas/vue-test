<script>
import { TripInfoApi } from '../services/trip-info-api.js';
import { TripEntity } from '../model/trip.entity.js';
import Tripcard from "./tripcard.component.vue";

export default {
  name: "historylist.component",
  components: {
    Tripcard
  },
  data() {
    return {
      api: new TripInfoApi(),
      trips: [],
      trip: TripEntity
    }
  },
  created() {
    this.api.getTrips().then(response => {
      let i = 0;
      while(response.data.length > 0) {
        this.trips.push(new TripEntity(
            response.data[i].id,
            response.data[i].nombre,
            response.data[i].fecha_carga,
            response.data[i].fecha_descarga,
            response.data[i].lugar_carga,
            response.data[i].lugar_descarga,
            response.data[i].conductor,
            response.data[i].placa_carreta,
            response.data[i].placa_tracto,
            response.data[i].empresa,
            response.data[i].ruc,
            response.data[i].imagen_empresa,
        ));
        i+=1;
      }
    });
  }
}

</script>

<template>
  <div class="main-top">
    <h1>Mis viajes anteriores</h1>
    <pv-button style="background-color: #1E3A8A" >Exportar</pv-button>
  </div>
  <div class="main-body">
    <Tripcard v-for="trip in trips" :trip="trip"/>
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

</style>