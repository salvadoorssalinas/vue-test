export class Expense {
    constructor(gasolina = 0.00, gasolinaDescripcion = "Sin descripción", peajes = 0.00,
                peajesDescripcion = "Sin descripción", viaticos = 0.00, viaticosDescripcion = "Sin descripción",
                imagen = "sinimagen.jpg"){
        this.gasolina = gasolina;
        this.gasolinaDescripcion = gasolinaDescripcion;
        this.peajes = peajes;
        this.peajesDescripcion = peajesDescripcion;
        this.viaticos = viaticos;
        this.viaticosDescripcion = viaticosDescripcion;
        this.imagen = imagen;
    }
}