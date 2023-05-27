import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { HomeComponent } from './Componentes/home/home.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { GestionComponent } from './Componentes/gestion/gestion.component';
import { AnyadirComponent } from './Componentes/anyadir/anyadir.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import { DetalleTrabajadorComponent } from './Componentes/detalle-trabajador/detalle-trabajador.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "trabajadores", component: TrabajadoresComponent },
  { path: "gestionar-trabajadores", component: GestionComponent },
  { path: "anyadir-trabajador", component: AnyadirComponent },
  { path: "modificar-trabajador", component: ModificarComponent },
  { path: "detalle/:id", component: DetalleTrabajadorComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
