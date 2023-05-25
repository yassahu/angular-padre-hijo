import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { HomeComponent } from './Componentes/home/home.component';
import { Error404Component } from './Componentes/error404/error404.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "trabajadores", component: TrabajadoresComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
