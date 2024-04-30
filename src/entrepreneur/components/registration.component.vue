<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const registerTrip = () => {
      router.push('/empresario/registro/viaje');
    };

    const modifyTrip = () => {
      router.push('/empresario/modificar/viaje');
    };

    const registerExpense = () => {
      router.push('/empresario/registro/gasto');
    };

    const modifyExpense = () => {
      router.push('/empresario/modificar/gasto');
    };

    return {
      registerTrip,
      modifyTrip,
      registerExpense,
      modifyExpense
    };
  }
}
</script>

<template>
  <div class="container">
    <pv-card class="card">
      <template v-slot:title>
        <h2>Registrar mis Viajes</h2>
      </template>
      <template v-slot:content>
        <p>Haga click en "Registrar" para iniciar con el registro de un nuevo viaje de transporte de su empresa</p>
      </template>
      <template v-slot:footer>
        <pv-button class="register-button" @click="registerTrip">Registrar</pv-button>
        <pv-button class="modify-button" @click="modifyTrip">Modificar</pv-button>
      </template>
    </pv-card>
    <pv-card class="card">
      <template v-slot:title>
        <h2>Registrar mis Gastos</h2>
      </template>
      <template v-slot:content>
        <p>Haga click en "Registrar" para iniciar con el registro de un nuevo gasto de un viaje de transporte de su empresa</p>
      </template>
      <template v-slot:footer>
        <pv-button class="register-button" @click="registerExpense">Registrar</pv-button>
        <pv-button class="modify-button" @click="modifyExpense">Modificar</pv-button>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
}

.card {
  margin: 20px;
  width: 300px; /* Ancho fijo */
  height: 400px; /* Altura fija */
  text-align: center;
}

.register-button {
  margin-top: 20px;
  margin-right: 20px; /* Añadido margen a la derecha */
}

.modify-button {
  margin-top: 20px;
}
</style>
