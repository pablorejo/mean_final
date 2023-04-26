import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { pathsToSkip } from 'mongoose';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';

const axios = require('axios');
const uri_pedidos = "http://localhost:3000/pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  //selectedPedido: PedidoModule;
  //pedidos: PedidoModule[] = [];
  pedidos: PedidoModule[] = [];

  // Uri del http
  uri = "http://localhost:3000/pedidos"

  selectedPedido: PedidoModule;

  constructor(private http: HttpClient) { 
    this.selectedPedido = new PedidoModule();
  } 

  // Nos devolvera un arreglo de empleados que vendran desde nuestro servidor
  getPedidos(){
    return this.http.get(this.uri);
  }

  postPedido(pedido: PedidoModule){

    // al hacer el post tendremos que pasarle la url y el dato que le queremos pasar que en nuestro caso sera el pedido
    return this.http.post(this.uri, pedido);
  }

  putPedido(pedido: PedidoModule){ 
    // put necesita lo mismo pero nosotros en nuestra api rest le tenemos que pasar el id del empleado para que este
    // sepa cual es el que tiene que cambiar y de ahi el  + `/${pedido._id}`
    return this.http.put(this.uri + `/${pedido._id}`, pedido );
  }

  deletePedido(id: String){
    // Aqui lo mismo que antes usamos el metodo delete de http y le mandamos el id del pedido que queremos eliminar
    return this.http.delete(this.uri + `/${id}`);
  }

  // Busca por id
  findByID(id: String){
    return this.http.get(this.uri + `/id/${id}`);
  }

  // Buscar por modelo
  findByIdArticulo(id_articulo: String){
    return this.http.get(this.uri + `/modelo/${id_articulo}`);
  }

}
