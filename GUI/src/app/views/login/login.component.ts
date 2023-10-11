import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import  jwt_decode from "jwt-decode"
import { ApiConnectService } from 'src/app/services/api-connect.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _apiConnect:ApiConnectService, private router:Router) {}

  loginData:any = {
    name:'',
    password:''
  }

  loginRequest() {
    this._apiConnect.post('auth', this.loginData)
    .subscribe({
      next:(response:any) => {
        sessionStorage.setItem('tkn',response.access)
       if (response.access) {
        const decodedUserInfo:any = jwt_decode(response.access)
        if (decodedUserInfo.user_group[0] == "Administradores") {
          this.router.navigate(['/admin'])
        }
        else {
          this.router.navigate(['/admin/users'])
        }
       }

      },
      error:(error) => {
        console.log(error)
      }
    })
  }
}
