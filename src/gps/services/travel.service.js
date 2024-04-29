import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class TravelService {
    getTravels() {
        return http.get("trips");
    }
    getTravelByID(id) {
        return http.get(`trips/?id=${id}`);
    }
}