<script>
import { useRouter } from 'vue-router';
import {ref} from "vue";
import { useConfirm } from 'primevue/useconfirm';

export default {
  name: "register-trip",
  setup() {
    const router = useRouter();
    const confirm = useConfirm();
    const isVisible = ref(false);
    const openDialog = () => {
      confirm.require({
        message: 'The data requested for the trip will be recorded. Are you sure you want to record it?',
        header: 'Register Trip',
        onShow: () => {
          isVisible.value = true;
        },
        onHide: () => {
          isVisible.value = false;
        }
      });
    };

    return {
      openDialog
    };
  }
}
</script>

<template>
    <div class="container">
      <h1>Trip Registration</h1>
      <h2>Driver</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Name</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>DNI</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-2-columns">
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
      <div class="grid-container-1-column">
        <div>
          <p>Model</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-2-columns">
        <div>
          <p>Trailer plate</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Tractor plate</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-2-columns">
        <div>
          <p>Maximum Ctapacity (kg)</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Volume (m^3)</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <h2>Load</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Type</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Total Weight</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <h2>Trip</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Load Location</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Unload Location</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-2-columns">
        <div>
          <p>Load Date</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Estimated Unload Date</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-1-columns">
        <p>Client's Name</p>
        <pv-inputtext style="width: 100%;"></pv-inputtext>
      </div>
      <div class="grid-container-1-columns">
        <p>Load Evidence</p>
        <img src="../../assets/images/upload-image.jpg" height="100px">
        <div style="text-align: center; width: 8%; margin-left: 8px;">
          <pv-button style="background-color:#006400;">Upload</pv-button>
        </div>
      </div>
      <div class="button">
        <pv-confirm-dialog id="confirm" />
        <pv-button @click="openDialog()" label="Confirm" :aria-expanded="visible" :aria-controls="visible ? 'confirm' : null"
                   style="background-color: #006400; padding: 25px 45px;" >
          Register
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