import { Component, Input } from '@angular/core';
import { Trabajador } from 'src/app/Modelos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent {
@Input() trabajador!: Trabajador;

metodo(){}
}
