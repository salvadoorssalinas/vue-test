export class TripEntity {
    constructor(id, nombre, fecha_carga, fecha_descarga, lugar_carga, lugar_descarga, conductor, placa_carreta, placa_tracto, empresa, ruc, imagen_empresa) {
        this.id = id;
        this.nombre = nombre;
        this.fecha_carga = fecha_carga;
        this.fecha_descarga = fecha_descarga;
        this.lugar_carga = lugar_carga;
        this.lugar_descarga = lugar_descarga;
        this.conductor = conductor;
        this.placa_carreta = placa_carreta;
        this.placa_tracto = placa_tracto;
        this.empresa = empresa;
        this.ruc = ruc;
        this.imagen_empresa = imagen_empresa;
    }

}