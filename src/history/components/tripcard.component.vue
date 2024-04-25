<script>
import { ref } from 'vue';
import {TripEntity} from "../model/trip.entity.js";

export default {
  name: "tripcard.component",
  props: {
    trip: {
      type: TripEntity,
      required: true
    }
  },
  setup(props) {
    const showMore = ref(false);
    const toggleShowMore = () => {
      showMore.value = !showMore.value;
    }
    return {
      showMore,
      toggleShowMore,
      props
    }
  },
}

</script>

<template>
  <main>
    <pv-card class="trip-card">
      <template #title>
        <h2>{{trip.nombre}}</h2>
      </template>
      <template #content>
        <div class="trip-info-item">
          <img :src="trip.imagen_empresa" alt="Logo de empresa" width="150px">
        </div>
        <div class="trip-info">
          <div class="trip-info-item">
            <h3>Fecha de carga: </h3>
            <p>{{trip.fecha_carga}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Fecha de descarga: </h3>
            <p>{{trip.fecha_descarga}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Empresa: </h3>
            <p>{{trip.empresa}}</p>
          </div>
          <div v-if="showMore" class="oculto">
            <div class="trip-info-item">
              <h3>Lugar de carga: </h3>
              <p>{{trip.lugar_carga}}</p>
            </div>
            <div class="trip-info-item">
              <h3>Lugar de descarga: </h3>
              <p>{{trip.lugar_descarga}}</p>
            </div>
            <div class="trip-info-item">
              <h3>Conductor: </h3>
              <p>{{trip.conductor}}</p>
            </div>
            <div class="trip-info-item">
              <h3>Placa de carreta: </h3>
              <p>{{trip.placa_carreta}}</p>
            </div>
            <div class="trip-info-item">
              <h3>Placa de tracto: </h3>
              <p>{{trip.placa_tracto}}</p>
            </div>
            <div class="trip-info-item">
              <h3>RUC: </h3>
              <p>{{trip.ruc}}</p>
            </div>
          </div>
          <div class="trip-info-item">
            <pv-button
                style="margin: 10px; border-radius: 10px; width: 25%; display: flex;
                justify-content: center; align-items: center; background-color: #006400;
                border-color: #005000;"
                @click="toggleShowMore">
              <div v-if="showMore">Ver menos</div>
              <div v-else>Ver más</div>
            </pv-button>
          </div>
        </div>
      </template>

    </pv-card>
  </main>
</template>

<style scoped>

main {
  margin: 40px;
}

h2, h3 {
  margin-right: 5px;
  color: #1E3A8A;
}

.trip-card {
  background-color: rgba(255, 165, 0, 0.58);
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.trip-info-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>