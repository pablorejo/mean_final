import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';






  
export class PedidoModule { 
  _id:                 string;
  id_usuario:      	  string;
  id_articulo:        string;
  cantidad:           number;
  fecha_pedido:	      Date;
  direccion_de_envio: string;
  
  constructor (
    _id = '',
    id_usuario = '',
    id_articulo = '', 
    cantidad = 0,
    fecha_pedido = new Date(),
    direccion_de_envio = ''
    ){
    this._id = _id;
    this.id_usuario = id_usuario;
    this.id_articulo = id_articulo;
    this.cantidad = cantidad;
    this.fecha_pedido = fecha_pedido;
    this.direccion_de_envio = direccion_de_envio;
  }
}


