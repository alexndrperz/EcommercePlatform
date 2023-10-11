import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiConnectService } from './api-connect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(private router:Router, private _apiConnect:ApiConnectService) { } 
  canActivate(
    next: ActivatedRouteSnapshot,  
    state: RouterStateSnapshot): boolean {
      const token = sessionStorage.getItem('tkn')
      const objectDecoded:any = this._apiConnect.decodeCookie()
      if(token && objectDecoded.user_group[0] == "Administradores") {
      return true
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
