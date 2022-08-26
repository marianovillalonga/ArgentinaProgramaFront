import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pagina } from 'src/app/models/pagina';
import { PaginasService } from 'src/app/services/paginas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listPaginas: Pagina[] = [];

  constructor(private _paginaService: PaginasService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPaginas();
  }


  obtenerPaginas(){
    this._paginaService.getPaginas().subscribe(data =>{
      console.log(data);
      this.listPaginas = data;
    },error => {
      console.log(error)
    })
  }

  eliminarPagina(id: any){
    this._paginaService.eliminarPagina(id).subscribe(data => {
      this.toastr.error('La pagina fue eliminada con exito' , 'Pagina Eliminada');
      this.obtenerPaginas();
    }, error =>{
      console.log(error)
    })
  }
}
