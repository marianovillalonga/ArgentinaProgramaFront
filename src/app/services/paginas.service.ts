import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagina } from '../models/pagina';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {
  url = 'http://localhost:4000/api/pagina/';

  constructor(private http: HttpClient) { }

  getPaginas(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarPagina(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPagina(pagina: Pagina): Observable<any> {
    return this.http.post(this.url, pagina);
  }

  obtenerPagina(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
