import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from 'src/app/Modelos/trabajador';
import { TrabajadoresService } from 'src/app/Servicios/trabajadores.service';

@Component({
  selector: 'app-borrar-trabajador',
  templateUrl: './borrar-trabajador.component.html',
  styleUrls: ['./borrar-trabajador.component.css']
})
export class BorrarTrabajadorComponent {

  trabajador!:Trabajador;

  constructor(private miRutaActiva:ActivatedRoute, //La variable puede llamarse también ActivatedRoute, no hay problema
              private miServicio:TrabajadoresService,
              private miRouter:Router
    ){}

  ngOnInit(){
    let parametro = this.miRutaActiva.snapshot.params["id"];
    this.trabajador = this.miServicio.getTrabajador(parametro);
}

  borrar(id:number){
    this.miServicio.borrar(id);
    this.miRouter.navigate(["/trabajadores"]);
  }
}
