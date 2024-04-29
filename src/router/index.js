import {createRouter, createWebHistory} from "vue-router";
import Historylist from "../history/components/history-list.component.vue";
import ExpenseList from "../expenses/components/expense-list.component.vue";
import ExpenseDescription from "../expenses/components/expense-description.component.vue"
import DetailTrip from "../history/components/details-trip.component.vue";
import barraEstadisticaComponent from "../stadistics/components/barra-estadistica.component.vue";

import TravelList from "../gps/components/travel-list.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/historial' },
        { path: '/historial', component: Historylist },
        { path: '/gastos', component: ExpenseList },
        { path: '/gastos/:id', component: ExpenseDescription},
        {
            path: '/detailTrip/:id',
            name: 'DetailTrip',
            component: () => import('../history/components/details-trip.component.vue'),
            props: true
        },
        { path: '/estadisticas', component: barraEstadisticaComponent},
        { path: '/gps', component: TravelList},
        {
            path: '/gpsTravel/:id',
            name: 'GpsTravel',
            component: () => import('../gps/components/map.component.vue'),
            props: true
        },
    ]
});

export default router;