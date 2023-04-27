import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModule } from 'src/app/models/usuario/usuario.module';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

declare var M: any; // Esto es de materialize para enviar alertas a los usuarios


@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css'],
  providers: [UsuariosService]
})

export class InsertarUsuarioComponent {


    // Creeamos el constructor de la clase y iniciamos el servicio de usuario.
    usuarioService: UsuariosService;
    constructor( usuarioService: UsuariosService){
      this.usuarioService = usuarioService;
    }

    ngOnInit(){
      console.log("iniciando");
      this.getUsuarios();
      this.resetForm();
    }

 
  
 
    
    busqueda: string = ''; // TExto por el que se va a buscar
    criterio: string = ''; // Criterio para elejir la busqueda
  
    buscar(){
      console.log("Buscando " + this.criterio +" que coincida con " + this.busqueda);
      
      switch (this.criterio) {
        case "TODOS": 
          this.getUsuarios();
          break;
        case "ID":
          this.usuarioService.findByID(this.busqueda)
            .subscribe(res =>{
              let usuario = res as UsuarioModule;
              this.usuarioService.usuarios = [usuario];
              console.log(res);
            })
          break;
        case "NOMBRE":
          console.log("Buscar por NOMBRE");
          
          this.usuarioService.findByNombre(this.busqueda)
            .subscribe(res =>{
              this.usuarioService.usuarios = res as UsuarioModule[];
              console.log(res);
            })
          break;
        default:
          break;
      }
    }
  
  
    findByNombre(nombre: string){
      this.usuarioService.findByNombre(nombre)
        .subscribe(res =>{
          this.usuarioService.usuarios = res as UsuarioModule[];
          console.log(res);
        })
    }

  
      
    editUsuario(Usuario: UsuarioModule){
      console.log("Editar Usuario");
      this.usuarioService.selectedUsuario = Usuario;
    }
  
    deleteUsuario(_id: string){
      console.log("Eliminar Usuario");
      
      this.usuarioService.deleteUsuario(_id)
        .subscribe(res => {
          console.log(res);
          this.getUsuarios();
          console.log("Usuario eliminado");
          M.toast({html: "Eliminado con exito"});
          
        })
      this.getUsuarios();
    }
  
  // // Definimos la funcion que va a manejar el formulario
  addUsuario(form:NgForm){
    // En caso de que existe el id lo actualizamos
    if (form.value._id){
      console.log("Editando usuario");
      console.log(form.value);
      this.usuarioService.putUsuario(form.value)

        .subscribe(res =>{
          var res_string = JSON.stringify(res);
          var res_data = JSON.parse(res_string);
          if(res_data.status == -1){
            M.toast({html: 'Error Editing'});
          }else{
            console.log(res);
            this.resetForm(form);
            M.toast({html: "Edit Succesfully"});
            this.getUsuarios();
          }
      })
    } else{
      // En caso de que no exista el id lo eliminamos
      console.log(form.value);
      this.usuarioService.postUsuario(form.value)
      
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
            this.getUsuarios();
          }
        })
      }
  }

  getUsuarios(){
    console.log("obtener usuarios");
    
    this.usuarioService.getUsuarios()
      .subscribe(res =>{
        this.usuarioService.usuarios = res as UsuarioModule[];
        console.log(res);
      })
  }



 

  resetForm(form?:NgForm, n?:Number){
    //n sirve para saber si el resetForm se ha hecho o no desde el propio programa o desde el html
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new UsuarioModule(
        '',
        'Administrador',
        ''
      );
      if (n==1){
        M.toast({html: "Formulario Borrado"});
      }
    }
  }
}
