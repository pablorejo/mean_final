import { Component } from '@angular/core';
import { UsuarioModule } from 'src/app/models/usuario/usuario.module';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';


declare var M: any; // Esto es de materialize para enviar alertas a los usuarios

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  // Creeamos el constructor de la clase y iniciamos el servicio de Usuario.
  usuarioServices: UsuariosService;
  constructor( usuarioServices: UsuariosService){
    this.usuarioServices = usuarioServices;
  }


  ngOnInit(){
    console.log("iniciando");
    this.getUsuarios();
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
        this.usuarioServices.findByID(this.busqueda)
          .subscribe(res =>{
            let usuario = res as UsuarioModule;
            this.usuarioServices.usuarios = [usuario];
            console.log(res);
          })
        break;
      case "NOMBRE":
        console.log("Buscar por NOMBRE");
        
        this.usuarioServices.findByNombre(this.busqueda)
          .subscribe(res =>{
            this.usuarioServices.usuarios = res as UsuarioModule[];
            console.log(res);
          })
        break;
      default:
        break;
    }
  }


  findByNombre(nombre: string){
    this.usuarioServices.findByNombre(nombre)
      .subscribe(res =>{
        this.usuarioServices.usuarios = res as UsuarioModule[];
        console.log(res);
      })
  }

  getUsuarios(){
    console.log("obtener Usuarios");
    
    this.usuarioServices.getUsuarios()
      .subscribe(res =>{
        this.usuarioServices.usuarios = res as UsuarioModule[];
        console.log(res);
      })
  }

    
  editUsuario(Usuario: UsuarioModule){
    console.log("Editar Usuario");
    this.usuarioServices.selectedUsuario = Usuario;
  }

  deleteUsuario(_id: string){
    console.log("Eliminar Usuario");
    
    this.usuarioServices.deleteUsuario(_id)
      .subscribe(res => {
        console.log(res);
        this.getUsuarios();
        console.log("Usuario eliminado");
        M.toast({html: "Eliminado con exito"});
        
      })
    this.getUsuarios();
  }
}

