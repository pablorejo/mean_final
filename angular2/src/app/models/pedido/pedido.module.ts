import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
  //     CommonModule
  //   ]
  // })

  
interface Pedido {
  id_articulo: string;
  cantidad: number;
}
  
export class PedidoModule { 
  
  id_usuario:      	string;
  articulos: Pedido[];
  fecha_pedido:	Date;
  direccion_de_envio: string;
  
  constructor (
    id_usuario = '',
    articulos = [
      { id_articulo:	'', cantidad:	0},
    ],
    fecha_pedido = new Date(),
    direccion_de_envio = ''
    ){
      this.id_usuario = id_usuario;
    this.articulos = articulos;
    this.fecha_pedido = fecha_pedido;
    this.direccion_de_envio = direccion_de_envio;
  }
}


