import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class ExpenseService {
    getExpensesByID(id) {
        return http.get(`expenses?id=${id}`);
    }
}