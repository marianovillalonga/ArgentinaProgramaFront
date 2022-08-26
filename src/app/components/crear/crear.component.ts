import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pagina } from 'src/app/models/pagina';
import { PaginasService } from 'src/app/services/paginas.service';  

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  paginaForm: FormGroup;
  titulo = 'Crear pagina';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _paginasService: PaginasService,
              private aRouter: ActivatedRoute) { 
    this.paginaForm = this.fb.group({
      nombre: ['', Validators.required],
      web: ['', Validators.required],
      repositorio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarPagina() {

    const PAGINA: Pagina = {
      nombre: this.paginaForm.get('nombre')?.value,
      web: this.paginaForm.get('web')?.value,
      repositorio: this.paginaForm.get('repositorio')?.value,
    }

    console.log(PAGINA);
    this._paginasService.guardarPagina(PAGINA).subscribe(data => {
      this.toastr.success('La pagina fue registrado con exito!', 'Pagina Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.paginaForm.reset();
    })

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar pagina';
      this._paginasService.obtenerPagina(this.id).subscribe(data => {
        this.paginaForm.setValue({
          nombre: data.nombre,
          web: data.web,
          repositorio: data.repositorio,
        })
      })
    }
  }

}
