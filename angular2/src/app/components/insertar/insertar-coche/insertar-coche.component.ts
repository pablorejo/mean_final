import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CocheModule } from 'src/app/models/coche/coche.module';
import { CocheService } from 'src/app/services/coches/coche.service';


declare var M: any; // Esto es de materialize para enviar alertas a los usuarios


@Component({
  selector: 'app-insertar-coche',
  templateUrl: './insertar-coche.component.html',
  styleUrls: ['./insertar-coche.component.css'],
  providers: [CocheService]
})

export class InsertarCocheComponent {


  // Creeamos el constructor de la clase y iniciamos el servicio de coche.
  cocheService: CocheService;
  constructor( cocheService: CocheService){
    this.cocheService = cocheService;
  }

  ngOnInit(){
    console.log("iniciando");
    this.getCoches();
    this.resetForm();
  }
  
  busqueda: string = ''; // TExto por el que se va a buscar
  criterio: string = ''; // Criterio para elejir la busqueda


  buscar(){
    console.log("Buscando " + this.criterio +" que coincida con " + this.busqueda);
    

    switch (this.criterio) {
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
      default:
        break;
    }
  }

  editCoche(coche: CocheModule){
    console.log("Editar coche");
    
    this.cocheService.selectedCoche = coche;
    this.cocheService.putCoche(coche)
      .subscribe(res => {
        console.log(res);
        this.getCoches();
        console.log("Coche editado");
        M.toast({html: "Eliminado con exito"});
        
      })
    this.getCoches();
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
}
