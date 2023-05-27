import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/Modelos/trabajador';
import { TrabajadoresService } from 'src/app/Servicios/trabajadores.service';

@Component({
  selector: 'app-anyadir',
  templateUrl: './anyadir.component.html',
  styleUrls: ['./anyadir.component.css']
})
export class AnyadirComponent {
  id!:number;
  nombre!:string;
  cargo!:string;

  constructor(private servicio:TrabajadoresService, private router:Router){}


  anyadirTrabajador(id:number,nombre:string,cargo:string){
    let trabajador:Trabajador = {
      id: id,
      nombre: nombre,
      cargo: cargo,
      foto: "",
      votos: 0
    }
    this.servicio.anyadirTrabajador(trabajador);
    this.router.navigate(["/gestionar-trabajadores"]);
  }

  // volverAListado(){
  //   this.router.navigate(["/gestionar-trabajadores"]);
  // }
}
