<script>
import {Travel} from "../model/travel.entity.js"
import Toolbar from "primevue/toolbar";

export default {
  name: "travelcard.component",
  components: {
    Toolbar
  },
  props: {
    travel: {
      type: Travel,
      required: true
    }
  }
}

</script>

<template>
  <main>
    <pv-card class="travel-card">
      <template #content>
        <div class="title">
          <h2>{{travel.nombre}}</h2>
        </div>
        <div class="content-info-preview">
          <p>FECHA DE CARGA: {{ travel.fechaCarga }}</p>
          <p>LUGAR DE CARGA: {{ travel.lugarCarga }}</p>
        </div>
      </template>
    </pv-card>
    <router-link :to="{ name: 'GpsTravel', params: { id: travel.id } }">
      <pv-button label="Ver GPS" class="btn"></pv-button>
    </router-link>
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