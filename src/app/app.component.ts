import { Component } from '@angular/core';
import { Trabajador } from './Modelos/trabajador';

import { TrabajadoresService } from './Servicios/trabajadores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Trabajadores';
  trabajadores!:Array<Trabajador>;

  constructor(private miServicio:TrabajadoresService){}

  ngOnInit(){
    this.trabajadores = this.miServicio.getTrabajadores();
  }

  sumaVoto(id:number){
    this.miServicio.sumaVoto(id);
  }

  restaVoto(id:number){
    this.miServicio.restaVoto(id);
  }

  borrar(id:number){
    this.miServicio.borrar(id);
  }

  reseteaVotos(id:number){
    this.miServicio.resetearVotos(id);
  }

  nuevoTrabajador(){
    alert("Nuevo trabajador");
    let trabajador:Trabajador={
      id: 7,
      nombre: "Lily",
      cargo: "Dogtor",
      foto: '7.jpg',
      votos: 100
    };
    this.miServicio.nuevoTrabajador(trabajador);
  }

}
