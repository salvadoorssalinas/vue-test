<script>
import { ref } from 'vue';

export default {
  name: "tripcard.component",
  setup() {
    const showMore = ref(false);
    const toggleShowMore = () => {
      showMore.value = !showMore.value;
    }
    return {
      showMore,
      toggleShowMore
    }
  },
  data() {
    return {
      id: 1,
      nombre: 'Viaje 1',
      fecha_carga: '24-03-2024 05:05:46 AM',
      fecha_descarga: '26-03-2024 06:58:10 AM',
      lugar_carga: 'Ventanilla Av. La Playa km 2',
      lugar_descarga: 'Morococha Carretera Central km 141',
      conductor: 'Juan Perez',
      placa_carreta: 'A1B-234',
      placa_tracto: 'EF3-TD3',
      empresa: 'Transportes Semarfe S.A.C.',
      ruc: '20545246949',
      imagen_empresa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXc_8BlUBLhK47zc97_8AnbISTFbngTsg2pM7xqVS2w&s',
    }
  },
}

</script>

<template>
  <pv-card class="trip-card">
    <template #title>
      <h2>{{nombre}}</h2>
    </template>
    <template #content>
      <div class="trip-info">
        <div class="trip-info-item">
          <h3>Fecha de carga:</h3>
          <p>{{fecha_carga}}</p>
        </div>
        <div class="trip-info-item">
          <h3>Fecha de descarga:</h3>
          <p>{{fecha_descarga}}</p>
        </div>
        <div class="trip-info-item">
          <h3>Empresa:</h3>
          <p>{{empresa}}</p>
        </div>
        <div v-if="showMore" class="oculto">
          <div class="trip-info-item">
            <h3>Lugar de carga:</h3>
            <p>{{lugar_carga}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Lugar de descarga:</h3>
            <p>{{lugar_descarga}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Conductor:</h3>
            <p>{{conductor}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Placa de carreta:</h3>
            <p>{{placa_carreta}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Placa de tracto:</h3>
            <p>{{placa_tracto}}</p>
          </div>
          <div class="trip-info-item">
            <h3>Empresa:</h3>
            <p>{{empresa}}</p>
          </div>
          <div class="trip-info-item">
            <h3>RUC:</h3>
            <p>{{ruc}}</p>
          </div>
        </div>
        <pv-button @click="toggleShowMore">Ver más</pv-button>
      </div>
    </template>
    <template #footer>
      <img :src="imagen_empresa" alt="Logo de empresa">
    </template>


  </pv-card>
</template>

<style scoped>

.trip-card {
  background-color: rgba(255, 165, 0, 0.58);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 20px;
}

.trip-info {
  display: flex;
  flex-direction: column;
}

</style>