import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './Componentes/card-trabajador/card-trabajador.component';
import { TrabajadoresComponent } from './Componentes/trabajadores/trabajadores.component';
import { HeaderComponent } from './Componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    TrabajadoresComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
