<script>
import { useRouter } from 'vue-router';

export default {
  name: "register-trip.component",
  setup() {
    const router = useRouter();

    const goToNextStep = () => {
      router.push('/entrepreneur/register2/trip');
    };

    return {
      goToNextStep
    };
  }
}
</script>

<template>
    <div class="container">
      <h1>Register of trip</h1>
      <h2>Driver</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Names</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Surnames</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>

      <div class="grid-container-3-columns">
        <div>
          <p>DNI</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Driver's license number</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Contact number</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <h2>Vehicle</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Model</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Trailer plate</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-3-columns">
        <div>
          <p>Load (kg)</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Volumne (m^3)</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Tractor plate</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="button">
        <pv-button @click="goToNextStep"
        style="background-color: #006400; padding: 25px 45px;" >
          Next
        </pv-button>
      </div>
    </div>
</template>

<style scoped>
 h1 {
   text-align:start;
 }
  .container {
    margin: 20px 90px;
  }

  .grid-container-2-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .grid-container-3-columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  .button {
    text-align: end;
    margin-top: 20px;
    font-size: 2em;
  }

</style>