import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trabajador } from 'src/app/Modelos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent {
@Input() trabajador!: Trabajador;
@Output() likeTrabajador = new EventEmitter<number>();
@Output() unlikeTrabajador = new EventEmitter<number>();
@Output() borraTrabajador = new EventEmitter<number>();

like(trabajador: Trabajador){
  this.likeTrabajador.emit(trabajador.id);
}

unlike(trabajador: Trabajador){
  this.unlikeTrabajador.emit(trabajador.id);
}

eliminar(trabajador: Trabajador){
  this.borraTrabajador.emit(trabajador.id);
}
}
