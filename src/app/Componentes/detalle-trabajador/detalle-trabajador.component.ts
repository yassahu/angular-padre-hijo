import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trabajador } from 'src/app/Modelos/trabajador';
import { TrabajadoresService } from 'src/app/Servicios/trabajadores.service';

@Component({
  selector: 'app-detalle-trabajador',
  templateUrl: './detalle-trabajador.component.html',
  styleUrls: ['./detalle-trabajador.component.css']
})
export class DetalleTrabajadorComponent {
  id!:number;
  trabajador!:Trabajador;

  constructor(private rutaActiva:ActivatedRoute,
              private servicio:TrabajadoresService
    ) { }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.params["id"];
    this.trabajador = this.servicio.getTrabajador(this.id);
  }

  like(trabajador: Trabajador){
    this.servicio.sumaVoto(trabajador.id);
  }

  unlike(trabajador: Trabajador){
    this.servicio.restaVoto(trabajador.id);
  }
}
