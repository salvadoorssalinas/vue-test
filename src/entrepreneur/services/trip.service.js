import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class TripService {
    getTrips() {
        return http.get("trips");
    }
    addTrip(trip) {
        return http.post("trips", trip);
    }
}