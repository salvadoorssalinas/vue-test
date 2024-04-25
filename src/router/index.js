import {createRouter, createWebHistory} from "vue-router";
import Historylist from "../history/components/historylist.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/historial' },
        { path: '/historial', component: Historylist }
    ]
});

export default router;