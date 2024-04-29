<script>
import {Travel} from "../model/travel.entity.js";
import {TravelService} from "../services/travel.service.js";
import TravelCard from "./travel-card.component.vue";

export default {
  name: "travellist.component",
  components: {
    TravelCard
  },
  data() {
    return {
      api: new TravelService(),
      travels: [],
      travel: Travel,
      filteredTravels: [],
    }
  },
  created() {
    this.api.getTravels().then(response => {
      this.travels = response.data.map(travel => new Travel(
          travel.id,
          travel.name,
          travel.load.date,
          travel.unload.date,
          travel.load.location,
          travel.unload.location,
          travel.driver,
          travel.vehicle.trailerPlate,
          travel.vehicle.tractorPlate,
      ));
      this.filteredTravels = this.travels;
    });
  }
}

</script>

<template>
  <div class="main-top">
    <h1>Ver viajes en progreso</h1>
  </div>
  <div class="main-body">
    <TravelCard v-for="travel in filteredTravels" :travel="travel"/>
  </div>

</template>

<style scoped>
.main-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.search-bar input {
  width: 650px;  /* adjust as needed */
  height: 45px;
}
@media (min-width: 1550px) {
}
</style>