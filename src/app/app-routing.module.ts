import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina1Component } from './Componentes/pagina1/pagina1.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { Error404Component } from './Componentes/error404/error404.component';

const routes: Routes = [
  // {path: , component:}
  {path:"", component: InicioComponent},
  {path:"pagina1", component: Pagina1Component},
  {path:"pagina2", component: Pagina2Component},
  {path:"trabajadores", component: TrabajadoresComponent},
  {path:"**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
