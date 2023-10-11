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
  internalData:any = []
  constructor(private _apiConnect:ApiConnectService) {

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
