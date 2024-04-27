<script>
import {Expense} from "../model/expense.entity.js";
import {ExpenseService} from "../services/expense.service.js";

export default {
  name: "expense-description",
  computed: {
    id(){
      return this.$route.params.id;
    }
  },
  data(){
    return{
      expense: Expense,
      expenseService: new ExpenseService(),
      totalExpenses: 0
    }
  },
  created() {
    this.expenseService.getTripByID(this.id).then(response => {
      this.expense = new Expense(
          response.data[0].expenses.fuel.amount,
          response.data[0].expenses.fuel.description,
          response.data[0].expenses.toll.amount,
          response.data[0].expenses.toll.description,
          response.data[0].expenses.viatics.amount,
          response.data[0].expenses.viatics.description,
          response.data[0].company.logoUrl
      );
      this.totalExpenses = this.expense.gasolina + this.expense.peajes + this.expense.viaticos;
    });
  }
}
</script>

<template>
  <h1>Viaje {{ id }}</h1>
  <div class="container">
    <img :src="expense.imagen" alt="imagen de la empresa">
    <div class="gastos">
      <div class="gasto">
        <div class="gasto-header">
          <h2>GASOLINA DIESEL</h2>
          <h2>S/. {{expense.gasolina}}</h2>
        </div>
        <div class="gasto-descripcion">
          <p>{{expense.gasolinaDescripcion}}</p>
        </div>
      </div>

      <div class="gasto">
        <div class="gasto-header">
          <h2>PEAJES</h2>
          <h2>S/. {{expense.peajes}}</h2>
        </div>
        <div class="gasto-descripcion">
          <p>{{expense.peajesDescripcion}}</p>
        </div>
      </div>

      <div class="gasto">
        <div class="gasto-header">
          <h2>VIATICOS</h2>
          <h2>S/. {{expense.viaticos}}</h2>
        </div>
        <div class="gasto-descripcion">
          <p>{{expense.viaticosDescripcion}}</p>
        </div>

      </div>
      <div class="gasto">
        <div class="gasto-header">
          <h2>TOTAL</h2>
          <h2>S/. {{ totalExpenses }}</h2>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>


  h1{
    font-size: 48px;
    text-align: center;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  img{
    width: 30%;
    margin: 0 auto;
  }

  .gasto-header{
    display: grid;
    grid-template-columns: calc(80% - 5px) calc(20% - 5px);
    grid-gap: 10px;
  }

  .gasto-header h2{
    background-color: #FFA500;
    padding: 5px 0px;
    text-align: center;
    border-radius: 5px;
  }

  .gasto-descripcion{
    background-color: #FFCA6A;
    padding: 5px;
    min-height: 75px;
  }
</style>