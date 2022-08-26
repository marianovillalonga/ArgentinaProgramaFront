export class Pagina {
    _id?: number;
    nombre: string;
    web: string;
    repositorio: string;

    constructor(nombre: string, web: string, repositorio: string ){
        this.nombre = nombre;
        this.web = web;
        this.repositorio = repositorio;
    }
}