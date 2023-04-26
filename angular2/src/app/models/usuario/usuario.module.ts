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
  
  _id:              string;
  tipo_de_usuario:  Role;
  nombre:           string;
  
  constructor (
    _id = '12',
    tipo_de_usuario: Role = 'Usuario', 
    nombre: ''
  )
  {
    this.nombre = nombre;
    this._id = _id;
    this.tipo_de_usuario = tipo_de_usuario;

  }
}
