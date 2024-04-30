<script>
import { useRouter } from 'vue-router';

export default {
  name: 'UserComponent',
  setup() {
    const router = useRouter();

    const goToClient = () => {
      router.push('/cliente/historial');
    };

    const goToEntrepreneur = () => {
      router.push('/empresario/registro');
    };

    return {
      goToClient,
      goToEntrepreneur
    };
  }
}
</script>

<template>
  <div class="user-component">
    <pv-card>
      <template #content>
        <pv-button @click="goToClient">Cliente</pv-button>
        <pv-button @click="goToEntrepreneur">Empresario</pv-button>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.user-component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

pv-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>