import { Component , OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms'; // Necesario para trabajar con formularios
import { json } from 'express';
// import { response } from 'express';
import { CocheModule } from 'src/app/models/coche/coche.module';

// import { FormGroup, FormControl, Validators } from '@angular/forms';





// Importamos el servicio de coches para que se pueda usar en el modelo de html
import { CocheService } from '../../services/coche.service';

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

  // myForm = new FormGroup({
  //   marca: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3)
  //   ]),
  //   modelo: new FormControl('', [
  //     Validators.required,
  //     Validators.email
  //   ]),
  //   carroceria: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(10)
  //   ])
  // });

  // onSubmit() {
  //   console.log(this.myForm.value);
  // }
  busqueda: string = ''; // TExto por el que se va a buscar
  criterio: string = ''; // Criterio para elejir la busqueda
  buscar(){
    console.log("Buscando " + this.criterio +" que coincida con " + this.busqueda);
    
    switch (this.criterio) {
      case "TODOS": 
        this.getCoches();
        break;
      case "ID":
        this.cocheService.findByID(this.busqueda)
          .subscribe(res =>{
            this.cocheService.coches = res as CocheModule[];
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
        break;
      default:
        break;
    }
  }


  // Creeamos el constructor de la clase y iniciamos el servicio de coche.
  cocheService: CocheService;
  constructor( cocheService: CocheService){
    this.cocheService = cocheService;
  }
  
  ngOnInit(){
    console.log("iniciando");
    this.getCoches();
  }

  // // Definimos la funcion que va a manejar el formulario
  addCoche(form:NgForm){
    // En caso de que existe el id lo actualizamos
    if (form.value._id){
      console.log("Editando coche");
      this.cocheService.putCoche(form.value)

        .subscribe(res =>{
          var res_string = JSON.stringify(res);
          var res_data = JSON.parse(res_string);
          if(res_data.status == -1){
            M.toast({html: 'Error Editing'});
          }else{
            console.log(res);
            this.resetForm(form);
            M.toast({html: "Edit Succesfully"});
            this.getCoches();
          }
      })
    } else{
      // En caso de que no exista el id lo eliminamos
      console.log(form.value);
      this.cocheService.postCoche(form.value)
      
      // Con subscrive obtenemos la respuesta del servidor.
        .subscribe(res => {
          console.log(res)
          var res_string = JSON.stringify(res);
          var res_data = JSON.parse(res_string);
          if(res_data.status == -1){
            M.toast({html: 'Error Saving'});
          }else{
            this.resetForm(form); // reseteamos el formulario 
            M.toast({html: 'Save Succesfully'});
            this.getCoches();
          }
        })
      }
  }

  getCoches(){
    console.log("obtener coches");
    
    this.cocheService.getCoches()
      .subscribe(res =>{
        this.cocheService.coches = res as CocheModule[];
        console.log(res);
      })
  }

  
  editCoche(coche: CocheModule){
    console.log("Editar coche");
    
    this.cocheService.selectedCoche = coche;
  }

  deleteCoche(_id: string){
    console.log("Eliminar coche");
    
    this.cocheService.deleteCoche(_id)
      .subscribe(res => {
        console.log(res);
        this.getCoches();
        console.log("Coche eliminado");
        M.toast({html: "Eliminado con exito"});
        
      })
    this.getCoches();
  }

  resetForm(form?:NgForm, n?:Number){
    //n sirve para saber si el resetForm se ha hecho o no desde el propio programa o desde el html
    if (form) {
      form.reset();
      this.cocheService.selectedCoche = new CocheModule();
      if (n==1){
        M.toast({html: "Formulario Borrado"});
      }
    }
  }
  
  
  findByMarca(marca: string){
    this.cocheService.findByMarca(marca)
      .subscribe(res =>{
        this.cocheService.coches = res as CocheModule[];
        console.log(res);
      })
  }
}
