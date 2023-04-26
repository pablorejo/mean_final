import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
//import { PedidoModule } from '../../models/pedido/pedido.module';
import { CocheModule } from 'src/app/models/coche/coche.module';
import { pathsToSkip } from 'mongoose';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';

const axios = require('axios');
const uri = "http://localhost:3000/pedidos"
const uri_coches = "http://localhost:3000/coches";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  //selectedPedido: PedidoModule;
  //pedidos: PedidoModule[] = [];
  coches: CocheModule[] = [];


  constructor(private http: HttpClient) { 
    //this.selectedPedido = new PedidoModule();
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

  addPedido(pedido :  PedidoModule){
    return this.http.post(uri, pedido);
  }
}
