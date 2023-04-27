import { Component } from '@angular/core';
import { PedidosComponent } from '../pedidos.component';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
import { NgForm } from '@angular/forms';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';




declare var M: any; // Esto es de materialize para enviar alertas a los usuarios


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})


export class ModificarComponent {
    
   // Creeamos el constructor de la clase y iniciamos el servicio de pedido.
   pedidoService: PedidoService;

   constructor( pedidoService: PedidoService){
     this.pedidoService = pedidoService;
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

  getPedidos(){
    console.log("obtener pedidos");
    
    this.pedidoService.getPedidos()
      .subscribe(res =>{
        this.pedidoService.pedidos = res as PedidoModule[];
        console.log(res);
      })
  }

  addPedido(form:NgForm){
    // En caso de que existe el id lo actualizamos
    if (form.value._id){
      console.log("Editando usuario");
      console.log(form.value);
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
