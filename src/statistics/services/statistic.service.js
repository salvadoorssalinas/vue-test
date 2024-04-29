import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class StatisticService {
    getTrips() {
        return http.get("trips");
    }
}