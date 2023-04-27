import { Component , OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'; // Necesario para trabajar con formularios
import { json } from 'express';
// import { response } from 'express';
import { CocheModule } from 'src/app/models/coche/coche.module';

// import { FormGroup, FormControl, Validators } from '@angular/forms';




// Importamos el servicio de coches para que se pueda usar en el modelo de html
import { CocheService } from '../../services/coches/coche.service';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
import { PedidoModule } from 'src/app/models/pedido/pedido.module';

declare var M: any; // Esto es de materialize para enviar alertas a los usuarios


// Decorador de la clase
@Component({
  selector: 'app-coches', // Definimos como llamar al componente desde html
  templateUrl: './coches.component.html', //url a la pagina html del componente
  styleUrls: ['./coches.component.css'], // url a la pagina de estilos del componente
  providers: [CocheService]
  
})


// Exportamos la clase y la definimos
export class CochesComponent {
  
  // Creeamos el constructor de la clase y iniciamos el servicio de coche.
  cocheService: CocheService;
  pedidoService: PedidoService;

  constructor( cocheService: CocheService, pedidoService: PedidoService){
    this.cocheService = cocheService;
    this.pedidoService = pedidoService;
  }

  ngOnInit(){
    console.log("iniciando");
    this.getCoches();
  }


  busqueda: string = ''; // TExto por el que se va a buscar
  criterio: string = ''; // Criterio para elejir la busqueda
  cantidad: number = 0; // Cantidad para realizar el envio
  direccion: string = '' // Direccion a la que se va realizar el envio

  buscar(){
    console.log("Buscando " + this.criterio +" que coincida con " + this.busqueda);
    
    switch (this.criterio) {
      // case "TODOS": 
      //   this.getCoches();
      //   break;
      case "ID":
        this.cocheService.findByID(this.busqueda)
          .subscribe(res =>{
            let coche = res as CocheModule;
            this.cocheService.coches = [coche];
            console.log(res);
            console.log(res);
          })
        break;
      case "MARCA":
        console.log("Buscar por marca");
        
        this.cocheService.findByMarca(this.busqueda)
          .subscribe(res =>{
            this.cocheService.coches = res as CocheModule[];
            console.log(res);
          })
        break;
      case "MODELO":
        this.cocheService.findByModelo(this.busqueda)
          .subscribe(res =>{
            this.cocheService.coches = res as CocheModule[];
            console.log(res);
          })
        break;
      default:providers: [CocheService]
        break;
    }
  }

  
 

  
  
  
  findByMarca(marca: string){
    this.cocheService.findByMarca(marca)
      .subscribe(res =>{
        this.cocheService.coches = res as CocheModule[];
        console.log(res);
      })
  }

  getCoches(){
    console.log("obtener coches");
    
    this.cocheService.getCoches()
      .subscribe(res =>{
        this.cocheService.coches = res as CocheModule[];
        console.log(res);
      })
  }






  addPedido(coche: CocheModule){
    
    var pedido = new PedidoModule(
      '', // ID del pedido
      '', // ID del usuario
      coche._id, // ID del articulo
      this.cantidad,
      new Date(),
      this.direccion
    )
    console.log(pedido);
    
    this.pedidoService.postPedido(pedido)
      .subscribe(res => {
        console.log(res);
        console.log("Pedido añadido");
        M.toast({html: "Pedido con exito"});
      })
  }
}
