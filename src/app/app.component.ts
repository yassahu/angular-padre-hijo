import { Component } from '@angular/core';
import { TRABAJADORES, Trabajador } from './Modelos/trabajador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Trabajadores';

  trabajadores: Array<Trabajador> = TRABAJADORES;

  verTrabajadores(){
    console.log(this.trabajadores);
  }

  sumaVoto(id:number){}

  restaVoto(id:number){}

  borrar(id:number){}

}
