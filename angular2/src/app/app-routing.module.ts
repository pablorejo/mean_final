import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './components/coches/coches.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InsertarCocheComponent } from './components/insertar/insertar-coche/insertar-coche.component';
import { InsertarUsuarioComponent } from './components/insertar/insertar-usuario/insertar-usuario.component';


// Aqui vamos a definir los componentes que vamos a usar segun la ruta en la que estemos
const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: 'coches', component: CochesComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'insertar-coche', component: InsertarCocheComponent},
  {path: 'insertar-usuario', component: InsertarUsuarioComponent},
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
