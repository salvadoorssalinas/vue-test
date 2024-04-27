<script>
import ExpenseCard from "./expense-card.component.vue";
import { Trip } from "../../history/model/trip.entity.js"
import { ExpenseService } from "../services/expense.service.js";
export default {
  name: "expense-list.component",
  components: {ExpenseCard},
  data(){
    return {
      rawTrips: [],
      trips: [],
      expenseService: new ExpenseService()
    };
  },
  created(){
    this.expenseService.getTrips().then(response => {
      this.rawTrips = response.data;
      this.rawTrips.forEach(trip => {
        this.trips.push(new Trip(
              trip.id,
              trip.name,
              trip.load.date,
              trip.unload.date,
              trip.load.location,
              trip.unload.location,
              trip.driver,
              trip.vehicle.trailerPlate,
              trip.vehicle.tractorPlate,
              trip.company.name,
              trip.company.ruc,
              trip.company.logoUrl
            )
        );
      });
    });
  }
}
</script>

<template>
  <h2>Gastos de los viajes</h2>
  <div class="list">
    <div class="list-content" v-for="trip in trips">
      <expense-card :trip="trip"></expense-card>
    </div>
  </div>
</template>

<style scoped>
  h2{
    font-size: 36px;
    text-align: center;
  }

  .list{
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
    gap: 20px;
  }


</style>