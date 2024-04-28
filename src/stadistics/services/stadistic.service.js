import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class StadisticService {
    getTripLoadDateById(tripId) {
        const url = `${baseURL}/trips/${tripId}/load/date`;
        return http.get(url).then(response => {
            return response.data.date;
        });
    }

    getMonthName(monthIndex) {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return months[monthIndex];
    }
}