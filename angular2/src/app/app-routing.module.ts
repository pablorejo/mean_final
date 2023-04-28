import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './components/coches/coches.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { InsertarCocheComponent } from './components/insertar/insertar-coche/insertar-coche.component';
import { InsertarUsuarioComponent } from './components/insertar/insertar-usuario/insertar-usuario.component';


// Aqui vamos a definir los componentes que vamos a usar segun la ruta en la que estemos
const routes: Routes = [
  {path: '', redirectTo: 'inicio-sesion', pathMatch: 'full'},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'usuario/coches', component: CochesComponent},
  {path: 'usuario/insertar', component: InsertarUsuarioComponent},
  {path: 'usuario/pedidos', component: PedidosComponent},
  {path: 'administracion/coches', component: InsertarCocheComponent},
  {path: 'administracion/users', component: InsertarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
