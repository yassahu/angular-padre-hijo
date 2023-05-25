import { Component } from '@angular/core';
import { TrabajadoresService } from '../../Servicios/trabajadores.service';
import { Trabajador } from 'src/app/Modelos/trabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  titulo = 'Listado de Trabajadores';
  trabajadores!:Array<Trabajador>;

  constructor(private servicio:TrabajadoresService){}

  ngOnInit(){
    this.trabajadores = this.servicio.getTrabajadores();
  }

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
