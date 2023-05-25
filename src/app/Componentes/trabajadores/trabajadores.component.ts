import { Component } from '@angular/core';
import { TrabajadoresService } from '../../Servicios/trabajadores.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  constructor(private servicio:TrabajadoresService){}

  titulo = 'Listado de Trabajadores';
  trabajadores = this.servicio.getTrabajadores();

  sumaVoto(id:number){
    this.servicio.sumaVoto(id);
  }

  restaVoto(id:number){
    this.servicio.restaVoto(id);
  }

  borrar(id:number){
    this.servicio.borrar(id);
  }
}
