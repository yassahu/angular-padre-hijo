import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './Componentes/card-trabajador/card-trabajador.component';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { HomeComponent } from './Componentes/home/home.component';
import { Error404Component } from './Componentes/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    TrabajadoresComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
