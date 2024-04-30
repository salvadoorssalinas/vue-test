import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// PrimeVue
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
//PrimeVue Components
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext'

//Router
import router from './router/index.js'

const app = createApp(App);
app.use(PrimeVue, {ripple: true});
app.component('pv-toolbar', Toolbar)
app.component('pv-button', Button)
app.component('pv-sidebar', Sidebar)
app.component('pv-card', Card)
app.component('pv-dropdown', Dropdown)
app.component('pv-inputtext', InputText)
app.use(router);
app.mount('#app')
