<script>
import {Trip} from "../model/trip.entity.js"
import Toolbar from "primevue/toolbar";
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
      router.push(`/GPS/${id}`);
    }
    return{
      goToGPS
    };
  },
}

</script>

<template>
  <main>
    <pv-card class="travel-card">
      <template #content>
        <div class="title">
          <h2>{{trip.nombre}}</h2>
        </div>
        <div class="content-info-preview">
          <p>FECHA DE CARGA: {{ trip.fechaCarga }}</p>
          <p>LUGAR DE CARGA: {{ trip.lugarCarga }}</p>
        </div>
      </template>
    </pv-card>
    <pv-button class="btn" @click="goToGPS(trip.id)">Ver GPS</pv-button>
  </main>
</template>

<style scoped>

main {
  margin: 40px 0px 4px auto;
  font-family: "Roboto", sans-serif;
  width: 75%;
  display: flex;
  flex-direction: column;
}

.travel-card {
  background-color: #FFA500;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  height: 100%;
  max-width: 700px;
}

.content-info-preview {
  position: absolute;
  margin: -94px 15px 0 170px;
}

.btn {
  background-color: #006400;
  border-radius: 15px;
  width: 25%;
  max-width: 320px;
  margin-left: 250px;
  margin-top: -25px;
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
  .btn {
    margin-left: 250px;
    margin-top: -5px;
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