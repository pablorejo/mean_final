import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { NgForm } from '@angular/forms';
import { UsuarioModule } from 'src/app/models/usuario/usuario.module';

declare var M: any; // Esto es de materialize para enviar alertas a los usuarios

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})


export class InicioSesionComponent {

  iniciarSesion(form:NgForm){
    console.log("Iniciando sesión");
  }

  usuarioService: UsuariosService;
  constructor( usuarioService: UsuariosService){
    this.usuarioService = usuarioService;
  }
}
