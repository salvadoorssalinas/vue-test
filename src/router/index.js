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

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: UserComponent },
        { path: '/cliente/historial', component: TripList },
        { path: '/cliente/historial/:id', component: TripDescription },
        { path: '/cliente/gastos', component: ExpenseList },
        { path: '/clienste/gastos/:id', component: ExpenseDescription },
        { path: '/cliente/estadisticas', component: BarGraph},
        { path: '/cliente/gps', component: TravelList},
        { path: '/cliente/gps/:id', component: Map },
        { path: '/empresario/registro', component: Registration },
        { path: '/empresario/historial', component: TripList },
        { path: '/empresario/gps', component: TravelList}
    ]
});

export default router;