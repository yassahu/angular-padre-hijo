import { Component } from '@angular/core';
import { Trabajador } from 'src/app/Modelos/trabajador';
import { TrabajadoresService } from 'src/app/Servicios/trabajadores.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  trabajadores!:Array<Trabajador>

  constructor(private servicio:TrabajadoresService){}

  ngOnInit(){
    this.trabajadores = this.servicio.getTrabajadores();
  }

  borrar(id:number){
    this.servicio.borrar(id);
  }

  sumarVoto(id:number){
    this.servicio.sumaVoto(id);
  }
  restarVoto(id:number){
    this.servicio.restaVoto(id);
  }
}
