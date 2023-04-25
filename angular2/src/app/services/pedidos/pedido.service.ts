import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
//import { PedidoModule } from '../../models/pedido/pedido.module';

const axios = require('axios');
const uri = "http://localhost:3000/pedidos"
const uri_coches = "http://localhost:3000/coches";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  //selectedPedido: PedidoModule;
  //pedidos: PedidoModule[] = [];


  constructor(private http: HttpClient) { 
    //this.selectedPedido = new PedidoModule();
  } 

  async GetCoches(){
    try{
      const response = await axios.get(uri_coches);
      return response.data;
    }catch(error){
      console.error(error);
    }
  }

  async DeleteCoche(id_coche : string){
    try{
      const response = await axios.delete(uri_coches + '/' + id_coche);
      console.log(response.data);
    }catch(error){
      console.error(error);
    }
  }
}

