import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers()
  }

  constructor(private _apiConnect:ApiConnectService) {}
  internalHeaders:string[] = ['Id', 'Nombre','Total de Compras','Activo']
  internalData:any[] = []

  getUsers() {
    this._apiConnect.getSecure('users')
    .subscribe({
      next:(response:any) => {
        this.internalData = response.data
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  deleteUser(evt:any) {
    this._apiConnect.deleteSecure(`users/${evt}`)
    .subscribe({
      next:(response:any) => {
        this.getUsers()
        console.log(response)
      },
      error:(error:any)=> {
        console.log(error)
      }
    })
  }

  createUser(data:any) {
    console.log(data)
    this._apiConnect.postSecure('users', data)
    .subscribe({
      next:(response:any) => {
        console.log(response)
      },
      error:(error:any)=> {
        console.log(error)
      }
    })
  }
}
