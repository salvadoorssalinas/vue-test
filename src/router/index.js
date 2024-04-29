import {createRouter, createWebHistory} from "vue-router";
import TripList from "../trip/components/trip-list.component.vue";
import ExpenseList from "../expenses/components/expense-list.component.vue";
import ExpenseDescription from "../expenses/components/expense-description.component.vue"
import TripDescription from "../trip/components/trip-description.component.vue";
import BarGraph from "../statistics/components/bargraph.component.vue";
import TravelList from "../gps/components/travel-list.component.vue";
import Map from "../gps/components/map.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/historial' },
        { path: '/historial', component: TripList },
        { path: '/historial/:id', component: TripDescription },
        { path: '/gastos', component: ExpenseList },
        { path: '/gastos/:id', component: ExpenseDescription },
        { path: '/estadisticas', component: BarGraph},
        { path: '/gps', component: TravelList},
        { path: '/gps/:id', component: Map },
    ]
});

export default router;