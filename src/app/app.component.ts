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

  sumaVoto(id:number){
    let pos = this.trabajadores.findIndex(t => t.id == id);
    this.trabajadores[pos].votos++;
  }

  restaVoto(id:number){
    let pos = this.trabajadores.findIndex(t => t.id == id);
    if(this.trabajadores[pos].votos > 0){
      this.trabajadores[pos].votos--;
    } else{
      alert("No se pueden restar votos.")
    }
  }

  borrar(id:number){
    let pos = this.trabajadores.findIndex(t => t.id == id);
    this.trabajadores.splice(pos, 1);
  }

}
