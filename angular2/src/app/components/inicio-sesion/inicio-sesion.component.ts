import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { NgForm } from '@angular/forms';
import { UsuarioModule } from 'src/app/models/usuario/usuario.module';
import { Router } from '@angular/router';

declare var M: any; // Esto es de materialize para enviar alertas a los usuarios

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})


export class InicioSesionComponent {


  // Creeamos el constructor de la clase y iniciamos el servicio de usuario.
  usuarioService: UsuariosService;
  constructor( usuarioService: UsuariosService, private router: Router){
    this.usuarioService = usuarioService;
  }



  iniciarSesion(form:NgForm){
    console.log("Iniciando sesión");

    this.usuarioService.findByID(form.value._id)
      .subscribe(res =>{
        var loging = res as {status: number, statusText: string} // Comprobar el estado de la conexión
        let user = res as UsuarioModule;

        if (loging.status != -1) {
          if(user.role === "Administrador"){
            M.toast({html: "Inicio de sesion con éxito"});
            this.usuarioService.currentuser = user;
            this.router.navigate(['administracion/coches']);
          }else if(user.role === "Usuario"){
            M.toast({html: "Inicio de sesion con éxito"});
            this.usuarioService.currentuser = user;
            this.router.navigate(['usuario/coches']);
          }
        }else{
          M.toast({html: "Inicio de sesion fallido"});
          this.usuarioService.currentuser = user;
          user._id = "";
        }
      })
  }


}
