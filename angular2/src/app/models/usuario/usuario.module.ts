import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

  
type Role = 'Administrador'| 'Usuario';

export class UsuarioModule { 
  
  id_usuario: string;
  tipo_de_usuario: Role;
  
  constructor (
  id_usuario = '',
  tipo_de_usuario: Role = 'Usuario', 
  
  ){
    this.id_usuario = id_usuario;
    this.tipo_de_usuario = tipo_de_usuario;
  }
}
