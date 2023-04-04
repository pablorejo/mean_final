import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './components/coches/coches.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, // Declaracion del componente principar 
    CochesComponent, // Declaramos el componente de coches
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Para poder trabajar con rutas
    FormsModule, // Esto se importa para poder trafajar con formularios
    HttpClientModule, // Lo necesitamos para los servicios
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
