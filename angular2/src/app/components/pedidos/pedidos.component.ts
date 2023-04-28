import { Component } from '@angular/core';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

declare var M: any; // Esto es de materialize para enviar alertas a los usuarios

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})


export class PedidosComponent {

  
  // Creeamos el constructor de la clase y iniciamos el servicio de pedido.
  pedidoService: PedidoService;
  usuarioService: UsuariosService;

  constructor( pedidoService: PedidoService, usuarioService: UsuariosService){
    this.pedidoService = pedidoService;
    this.usuarioService = usuarioService;
  }

  ngOnInit(){
    console.log("iniciando");
    this.getPedidos();
  }


  busqueda: string = ''; // TExto por el que se va a buscar
  criterio: string = ''; // Criterio para elejir la busqueda
  cantidad: number = 0; // Cantidad para realizar el envio
  direccion: string = '' // Direccion a la que se va realizar el envio

  buscar(){
    console.log("Buscando " + this.criterio +" que coincida con " + this.busqueda);
    
    switch (this.criterio) {
      // case "TODOS": 
      //   this.getPedidos();
      //   break;
      case "ID":
        this.pedidoService.findByID(this.busqueda)
          .subscribe(res =>{
            let pedido = res as PedidoModule;
            this.pedidoService.pedidos = [pedido];
            console.log(res);
            console.log(res);
          })
        break;
      case "ID_ARTICULO":
        console.log("Buscar por marca");
        
        this.pedidoService.findByIdArticulo(this.busqueda)
          .subscribe(res =>{
            this.pedidoService.pedidos = res as PedidoModule[];
            console.log(res);
          })
        break;
      default:
        break;
    }
  }

  
 

  
  getPedidos(){
    console.log(this.usuarioService);
    console.log("obtener pedidos");
    
    this.pedidoService.getPedidos()
      .subscribe(res =>{
        this.pedidoService.pedidos = res as PedidoModule[];
        console.log(res);
      })
  }
  
  
  findByIdArticulo(id_articulo: string){
    console.log("Encontrar pediod por id de artículo")

    this.pedidoService.findByIdArticulo(id_articulo)
      .subscribe(res =>{
        this.pedidoService.pedidos = res as PedidoModule[];
        console.log(res);
      })
  }


  findById(id: string){
    console.log("Encontrar pediod por id de artículo")

    this.pedidoService.findByID(id)
      .subscribe(res =>{
        this.pedidoService.pedidos = res as PedidoModule[];
        console.log(res);
      })
  }




  editPedido(pedido: PedidoModule){
    console.log("Editar pedido");
    
    this.pedidoService.selectedPedido = pedido;
  }

  deletePedido(id: string){
    console.log("Eliminar pedido");
    
    this.pedidoService.deletePedido(id)
      .subscribe(res => {
        console.log(res);
        this.getPedidos();
        console.log("Pedido eliminado");
        M.toast({html: "Eliminado con exito"});
        
      })
    this.getPedidos();
  }


}
