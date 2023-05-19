import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './Componentes/card-trabajador/card-trabajador.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { Pagina1Component } from './Componentes/pagina1/pagina1.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    HeaderComponent,
    InicioComponent,
    Pagina1Component,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
