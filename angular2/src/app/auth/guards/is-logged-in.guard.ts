import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {


  constructor(private userService: UsuariosService){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.userService.currentuser._id = ""){
      
      switch (this.userService.currentuser.role) {
        case 'Administrador':
          return true;
          break;
        default:
          return true;
          break;
      }
    }
    return false;
  }
  
}
