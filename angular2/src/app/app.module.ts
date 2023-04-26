import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './components/coches/coches.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InsertarCocheComponent } from './components/insertar/insertar-coche/insertar-coche.component';
import { InsertarUsuarioComponent } from './components/insertar/insertar-usuario/insertar-usuario.component';
@NgModule({
  declarations: [
    AppComponent, // Declaracion del componente principar 
    CochesComponent, PedidosComponent, NavbarComponent, UsuariosComponent, InsertarCocheComponent, InsertarUsuarioComponent, // Declaramos el componente de coches
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
