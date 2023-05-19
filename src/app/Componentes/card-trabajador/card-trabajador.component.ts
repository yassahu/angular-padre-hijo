import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajador } from 'src/app/Modelos/trabajador';
// import { TrabajadoresService } from 'src/app/Servicios/trabajadores.service';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit{
@Input() trabajador!: Trabajador;
@Output() likeTrabajador = new EventEmitter<number>();
@Output() unlikeTrabajador = new EventEmitter<number>();
@Output() borraTrabajador = new EventEmitter<number>();
@Output() reseteaVotos = new EventEmitter<number>();

// constructor(private miServicio:TrabajadoresService) { }

ngOnInit(): void {
}

like(trabajador: Trabajador){
  this.likeTrabajador.emit(trabajador.id);
}

unlike(trabajador: Trabajador){
  this.unlikeTrabajador.emit(trabajador.id);
}

eliminar(trabajador: Trabajador){
  this.borraTrabajador.emit(trabajador.id);
}

// resetearVotos(trabajador: Trabajador){
//   alert("Vamos a poner a cero los votos llamando al servicio desde el hijo.");
//   this.miServicio.resetearVotos(trabajador.id);
// }

resetearVotos(trabajador: Trabajador){
  this.reseteaVotos.emit(trabajador.id);
}
}
