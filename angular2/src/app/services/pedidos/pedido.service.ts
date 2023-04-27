import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { pathsToSkip } from 'mongoose';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';
import { CocheModule } from 'src/app/models/coche/coche.module';
import { CocheService } from '../coches/coche.service';


const axios = require('axios');
const uri_pedidos = "http://localhost:3000/pedidos"
const uri_coches = "http://localhost:3000/coches";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  //selectedPedido: PedidoModule;
  //pedidos: PedidoModule[] = [];
  pedidos: PedidoModule[] = [];

  serviceCoche: CocheService;
  selectedPedido: PedidoModule;

  constructor(private http: HttpClient, serviceCoche: CocheService) { 
    this.selectedPedido = new PedidoModule();
    this.serviceCoche = serviceCoche;
  } 


 


  // Nos devolvera un arreglo de empleados que vendran desde nuestro servidor
  getPedidos(){
    return this.http.get(uri_pedidos);
  }

  postPedido(pedido: PedidoModule){
    // al hacer el post tendremos que pasarle la url y el dato que le queremos pasar que en nuestro caso sera el pedido
    return this.http.post(uri_pedidos, pedido);
  }

  putPedido(pedido: PedidoModule){ 
    // put necesita lo mismo pero nosotros en nuestra api rest le tenemos que pasar el id del empleado para que este
    // sepa cual es el que tiene que cambiar y de ahi el  + `/${pedido._id}`
    return this.http.put(uri_pedidos + `/${pedido._id}`, pedido );
  }

  deletePedido(id: String){
    // Aqui lo mismo que antes usamos el metodo delete de http y le mandamos el id del pedido que queremos eliminar
    return this.http.delete(uri_pedidos + `/${id}`);
  }

  // Busca por id
  findByID(id: String){
    return this.http.get(uri_pedidos + `/id/${id}`);
  }

  // Buscar por modelo
  findByIdArticulo(id_articulo: String){
    return this.http.get(uri_pedidos + `/modelo/${id_articulo}`);
  }

  addPedido(pedido :  PedidoModule){
    return this.http.post(uri_pedidos, pedido);
  }



  async obtenerGetCoches(){
    try{
      var response = await axios.get(uri_coches);
      return response.data;
    }catch(error){
      console.error(error);
      return -1;
    }
  }

  async obtenerDeleteCoche(id_coche : string){
    try{
      var response = await axios.delete(uri_coches + `/${id_coche}`);
      return response;
      console.log(response.data);
    }catch(error){
      return -1;
      console.error(error);
    }
  }

  async obtenerFindByID(id_coche : string){
    try{
      var response = await axios.get(uri_coches + `/${id_coche}`);
      return response;
    }catch(error){
      console.error(error);
      return -1;
    }
  } //FINDBYID CREO QUE ESTÁ MAL (YA ARREGLADO)

  async obtenerPutCoche(coche: CocheModule){
    try{
      var response = await axios.put(uri_coches + `/${coche._id}`, coche);
      return response;
    }catch(error){
      console.error(error);
      return -1;
    }
  }


}

