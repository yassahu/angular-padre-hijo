import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina1Component } from './Componentes/pagina1/pagina1.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { BorrarTrabajadorComponent } from './Componentes/borrar-trabajador/borrar-trabajador.component';
import { activarBorrarGuard } from './Guardas/activar-borrar.guard';

const routes: Routes = [
  // {path: , component:}
  {path:"", component: InicioComponent},
  {path:"pagina1", component: Pagina1Component},
  {path:"pagina2", component: Pagina2Component},
  {path:"trabajadores", component: TrabajadoresComponent},
  {path: 'borrarTrabajador/:id', canActivate: [activarBorrarGuard], component: BorrarTrabajadorComponent },
  // {path:"**", component: Error404Component}
  {path:"**", redirectTo:"/"} //Lo suyo es hacer un componente, pero así, lo que hace es redirigir a la raíz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
