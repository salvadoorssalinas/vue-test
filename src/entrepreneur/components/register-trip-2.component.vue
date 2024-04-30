<script>
import { useRouter } from 'vue-router';
import { useConfirm } from 'primevue/useconfirm';
import { ref } from 'vue';

export default {
  name: "register-trip-2.component",
  setup() {
    const router = useRouter();

    const goToBackStep = () => {
      router.push('/empresario/registro/viaje');
    };


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
      goToBackStep,
      openDialog
    };
  }
}
</script>


<template>
  <div class="container">
    <h1>Register of trip</h1>
    <div class="separator">
      <h2>Load</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Type of load</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Weight of load</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>

      <h2>Trip</h2>
      <div class="grid-container-2-columns">
        <div>
          <p>Place of load</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Place of unload</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
      <div class="grid-container-2-columns">
        <div>
          <p>Data of load</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
        <div>
          <p>Date of unload</p>
          <pv-inputtext style="width: 100%;"></pv-inputtext>
        </div>
      </div>
    </div>
    <div class="grid-container-1-columns">
        <p>Upload image of the merchandise load</p>
        <img src="../../assets/images/upload-image.jpg" height="100px">
        <div style="text-align: center; width: 8%; margin-left: 8px;">
          <pv-button style="background-color:#006400;">Upload</pv-button>
        </div>
    </div>
    <div class="grid-container-1-columns">
        <p>Recipient's name</p>
        <pv-inputtext style="width: 100%;"></pv-inputtext>
    </div>
    <div class="button">
      <pv-button @click="goToBackStep"
                 style="background-color: #006400; padding: 25px 45px;" >
        Back
      </pv-button>

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

.grid-container-1-columns {
  display: grid;
  grid-template-columns: 1fr;
}

.button {
  margin-top: 20px;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
}

</style>