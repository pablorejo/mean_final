import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CocheModule } from 'src/app/models/coche/coche.module';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';
import { CocheService } from 'src/app/services/coches/coche.service';
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
  cocheService: CocheService;

  constructor( pedidoService: PedidoService, usuarioService: UsuariosService, cocheService: CocheService){
    this.pedidoService = pedidoService;
    this.usuarioService = usuarioService;
    this.cocheService = cocheService;
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



  cant: number = 0;
  editPedido(pedido: PedidoModule){
    console.log("Editar pedido");
    this.cant = pedido.cantidad;
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




  resetForm(form?:NgForm, n?:Number){
   //n sirve para saber si el resetForm se ha hecho o no desde el propio programa o desde el html
   if (form) {
     form.reset();
     this.pedidoService.selectedPedido = new PedidoModule(
       '',
       'Administrador',
       ''
     );
     if (n==1){
       M.toast({html: "Formulario Borrado"});
     }
   }
 }



 addPedido(form:NgForm){
   // En caso de que existe el id lo actualizamos
   if (form.value._id){
     console.log("Editando usuario");
     console.log(form.value);

     this.cocheService.findByID(this.pedidoService.selectedPedido.id_articulo)
       .subscribe(res =>{
         console.log("Respuesta");
        console.log(res);
        var coche = res as CocheModule;
        console.log(form.value.cantidad );
        
         if ((coche.cantidad  - form.value.cantidad) > 0){
           console.log("coche 1");
           this.cocheService.putCoche(coche);
           
           coche.cantidad = coche.cantidad + this.cant  - form.value.cantidad;
           console.log(this.pedidoService.selectedPedido.cantidad );
           
           console.log(coche.cantidad);
           console.log("coche 2");
           console.log(coche);
           this.cocheService.putCoche(coche)
             .subscribe(res =>{
               console.log(res);
               this.pedidoService.selectedPedido.cantidad = form.value.cantidad;
               this.pedidoService.putPedido(this.pedidoService.selectedPedido)

                 .subscribe(res =>{
                   var res_string = JSON.stringify(res);
                   var res_data = JSON.parse(res_string);
                   if(res_data.status == -1){
                     M.toast({html: 'Error Editing'});
                   }else{
                     console.log(res);
                     this.resetForm(form);
                     M.toast({html: "Edit Succesfully"});
                     this.getPedidos();
                   }
               })
           })
         }else {
           M.toast({html: "Cantidad insuficiente"});
         }
     })
     this.pedidoService.putPedido(form.value)

       .subscribe(res =>{
         var res_string = JSON.stringify(res);
         var res_data = JSON.parse(res_string);
         if(res_data.status == -1){
           M.toast({html: 'Error Editing'});
         }else{
           console.log(res);
           this.resetForm(form);
           M.toast({html: "Edit Succesfully"});
           this.getPedidos();
         }
     })
   } else{
     M.toast({html: "No se puede editar"});
   }
 }

}
