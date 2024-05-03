import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

export class ExpenseService {
    getExpensesByID(id) {
        return http.get(`expenses?id=${id}`);
    }
    setExpense(id, expense) {
        return http.put(`expenses/${id}`, expense);
    }
    addExpense(expense) {
        return http.post("expenses", expense);
    }
    async saveExpense(expense) {
        // Obtén el último id de la lista de gastos y añade 1 para el nuevo gasto
        const expensesResponse = await http.get("expenses");
        const expensesData = enxpensesResponse.data;
        const lastExpense = expensesData[expensesData.length - 1];
        expense.id = lastExpense ? String(Number(lastExpense.id) + 1) : "1";

        // Envía la solicitud POST para agregar el nuevo viaje
        return this.addExpense(expense);
    }
}