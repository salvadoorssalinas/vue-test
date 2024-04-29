export class Trip {
    constructor(id, nombre, fechaCarga, fechaDescarga, lugarCarga, lugarDescarga, conductor, placaCarreta, placaTracto) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCarga = fechaCarga;
        this.fechaDescarga = fechaDescarga;
        this.lugarCarga = lugarCarga;
        this.lugarDescarga = lugarDescarga;
        this.conductor = conductor;
        this.placaCarreta = placaCarreta;
        this.placaTracto = placaTracto;
    }
}