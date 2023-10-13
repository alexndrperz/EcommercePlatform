import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {
  ngOnInit(): void {
    this.getProductsAdm()
  }
  header:string[] =['id','Nombre','Precio','Creado en', 'Creado por']
  
  data:any[] = [
    {id:1, name:'Juana'},
    {id:2, name:'MArtin'},
    {id:3, name:'Pedro'},
    {id:4, name:'Maria'}
  ]

  internalData:any = []
  constructor(private _apiConnect:ApiConnectService) {}

  mostrarMensaje(nombre:string) {
    this._apiConnect.getNormalData(nombre)
    .subscribe({
      next:(respuestaAPI:any) => {
        console.log(respuestaAPI.mensaje)
      },
      error: (errorAPI) => {
        console.log(errorAPI)
      }
    })
  }

  createProduct(data:any) {
    this._apiConnect.postSecure('productos', data)
    .subscribe({
      next:(response:any) => {
        console.log(response)
        this.getProductsAdm()
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  updateProductAdm(data:any) {
    this._apiConnect.putSecure(`productos/${data.id}`, data)
    .subscribe({
      next:(response:any) => {
        console.log(response)
        this.getProductsAdm()
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  deleteProductAdm(evt:any) {
    console.log(evt);
    
    this._apiConnect.deleteSecure(`/productos/${evt}`)
    .subscribe({
      next:(response:any) => {
        console.log(response)
        this.getProductsAdm()
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  getProductsAdm() {
    this._apiConnect.getSecure('productos')
    .subscribe({
      next: (response:any) => {
        this.internalData = response.data
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }

}
