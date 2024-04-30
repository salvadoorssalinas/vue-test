import {createRouter, createWebHistory} from "vue-router";
import TripList from "../client/components/trip-list.component.vue";
import ExpenseList from "../client/components/expense-list.component.vue";
import ExpenseDescription from "../client/components/expense-description.component.vue"
import TripDescription from "../client/components/trip-description.component.vue";
import BarGraph from "../client/components/bargraph.component.vue";
import TravelList from "../client/components/travel-list.component.vue";
import Map from "../client/components/map.component.vue";
import Registration from "../entrepreneur/components/registration.component.vue";
import UserComponent from "../public/user.component.vue"
import RegisterTripComponent from "../entrepreneur/components/register-trip.component.vue";
import RegisterTrip2Component from "../entrepreneur/components/register-trip-2.component.vue";
import RegisterExpenseComponent from "../entrepreneur/components/register-expense.component.vue";
import ModifyTripComponent from "../entrepreneur/components/modify-trip.component.vue";
import ModifyExpenseComponent from "../entrepreneur/components/modify-expense.component.vue";
import AlertList from "../client/components/alert-list.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: UserComponent },
        { path: '/cliente/historial', component: TripList },
        { path: '/cliente/historial/:id', component: TripDescription },
        { path: '/cliente/gastos', component: ExpenseList },
        { path: '/cliente/gastos/:id', component: ExpenseDescription },
        { path: '/cliente/estadisticas', component: BarGraph },
        { path: '/cliente/gps', component: TravelList },
        { path: '/cliente/gps/:id', component: Map },
        { path: '/cliente/alertas/:id', component: AlertList },
        { path: '/empresario/registro', component: Registration },
        { path: '/empresario/registro/viaje', component: RegisterTripComponent },
        { path: '/empresario/registro2/viaje', component: RegisterTrip2Component },
        { path: '/empresario/registro/gasto', component: RegisterExpenseComponent },
        { path: '/empresario/modificar/viaje', component: ModifyTripComponent },
        { path: '/empresario/modificar/gasto', component: ModifyExpenseComponent },
        { path: '/empresario/historial', component: TripList },
        { path: '/empresario/gps', component: TravelList}
    ]
});

export default router;