import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuariosService: UsuariosService;
  isAuthenticate: boolean;
  constructor(usuariosService: UsuariosService) {
    this.usuariosService = usuariosService;
    if(usuariosService.currentuser._id){
      this.isAuthenticate = true;
    }else{
      this.isAuthenticate = false;
    }
  }
}
