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
  role:             Role;
  nombre:           string;
  
  constructor (
    _id = '',
    role: Role = 'Usuario', 
    nombre: ''
  )
  {
    this.nombre = nombre;
    this._id = _id;
    this.role = role;

  }
}
