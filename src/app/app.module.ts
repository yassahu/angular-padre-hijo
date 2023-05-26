import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './Componentes/card-trabajador/card-trabajador.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina1Component } from './Componentes/pagina1/pagina1.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { BorrarTrabajadorComponent } from './Componentes/borrar-trabajador/borrar-trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    HeaderComponent,
    InicioComponent,
    Pagina1Component,
    Pagina2Component,
    TrabajadoresComponent,
    Error404Component,
    BorrarTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
