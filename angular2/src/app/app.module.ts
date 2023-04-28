import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesComponent } from './components/coches/coches.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { PedidosComponent } from './components/pedidos/pedidos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InsertarCocheComponent } from './components/insertar/insertar-coche/insertar-coche.component';
import { InsertarUsuarioComponent } from './components/insertar/insertar-usuario/insertar-usuario.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ModificarComponent } from './components/pedidos/modificar/modificar.component';
import { NavbarUsersComponent } from './components/navbar-users/navbar-users.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarInicioSesionComponent } from './components/inicio-sesion/navbar-inicio-sesion/navbar-inicio-sesion.component';
@NgModule({
  declarations: [
    AppComponent, // Declaracion del componente principar 
    CochesComponent, PedidosComponent, UsuariosComponent, InsertarCocheComponent, InsertarUsuarioComponent, InicioSesionComponent, ModificarComponent, NavbarUsersComponent, NavbarAdminComponent, NavbarInicioSesionComponent, // Declaramos el componente de coches
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
