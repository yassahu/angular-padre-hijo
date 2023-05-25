import { Injectable } from '@angular/core';
import { TRABAJADORES, Trabajador } from '../Modelos/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor() { }

  trabajadores: Array<Trabajador> = TRABAJADORES;

  getTrabajadores(){
    return this.trabajadores;
  }

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

  anyadirTrabajador(trabajador:Trabajador){
    this.trabajadores.push(trabajador);
  }
}
