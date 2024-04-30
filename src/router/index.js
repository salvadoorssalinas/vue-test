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
import AlertList from "../client/components/alert-list.component.vue";
import ModifyTripComponent from "../entrepreneur/components/modify-trip.component.vue";
import ModifyExpenseComponent from "../entrepreneur/components/modify-expense.component.vue";
import ModifyRequestIdComponent from "../entrepreneur/components/modify-request-id.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: UserComponent },
        { path: '/client', redirect: '/client/history'},
        { path: '/client/history', component: TripList },
        { path: '/client/history/:id', component: TripDescription },
        { path: '/client/expenses', component: ExpenseList },
        { path: '/client/expenses/:id', component: ExpenseDescription },
        { path: '/client/statistics', component: BarGraph },
        { path: '/client/gps', component: TravelList },
        { path: '/client/gps/:id', component: Map },
        { path: '/client/alerts/:id', component: AlertList },
        { path: '/entrepreneur', redirect: '/entrepreneur/register'},
        { path: '/entrepreneur/register', component: Registration },
        { path: '/entrepreneur/register/trip', component: RegisterTripComponent },
        { path: '/entrepreneur/register2/trip', component: RegisterTrip2Component },
        { path: '/entrepreneur/register/expense', component: RegisterExpenseComponent },
        { path: '/entrepreneur/modify/trip', component: ModifyRequestIdComponent },
        { path: '/entrepreneur/modify/expense', component: ModifyRequestIdComponent },
        { path: '/entrepreneur/modify/trip/:id', component: ModifyTripComponent },
        { path: '/entrepreneur/modify/expense/:id', component: ModifyExpenseComponent },
        { path: '/entrepreneur/history', component: TripList },
        { path: '/entrepreneur/gps', component: TravelList}
    ]
});

export default router;