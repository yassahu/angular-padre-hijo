import { Component } from '@angular/core';
import { Trabajador } from '../../Modelos/trabajador';

import { TrabajadoresService } from '../../Servicios/trabajadores.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  titulo = 'Listado de Trabajadores';
  trabajadores!:Array<Trabajador>;

  constructor(private miServicio:TrabajadoresService){}

  ngOnInit(){
    this.trabajadores = this.miServicio.getTrabajadores();
  }


  borrar(id:number){
    this.miServicio.borrar(id);
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
