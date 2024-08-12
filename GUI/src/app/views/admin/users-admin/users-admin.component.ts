import { Component, OnInit, ViewChild } from '@angular/core';
import { ImgInputComponent } from 'src/app/components/img-input/img-input.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
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
 

  formData:any = {
    name:"",
    password:"",
    telefono:"",
    image:null,
    correo:""
  }

  constructor(private _apiConnect:ApiConnectService) {}
  internalHeaders:string[] = ['Id', 'Nombre','Total de Compras','Activo']
  internalData:any[] = []

  getUsers() {
    this._apiConnect.getSecure('clients')
    .subscribe({
      next:(response:any) => {
        this.internalData = response.data
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  getUserImage(name:string) {    
    
  return this._apiConnect.host.substring(0, this._apiConnect.host.length-1) + name
  }

  deleteUser(evt:any) {
    this._apiConnect.deleteSecure(`clients/${evt}`)
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

  cleanFormObj() {
    this.formData = {
      name:"",
      password:"",
      telefono:"",
      image:null,
      correo:""
    }
  }

  createUser(data:any) {
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    this._apiConnect.postSecure('clients', formData)
    .subscribe({
      next:(response:any) => {
        this.getUsers()
      },
      error:(error:any)=> {
        console.log(error)
      }
    })
  }
}
