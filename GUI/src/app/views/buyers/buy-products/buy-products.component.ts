import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent implements OnInit {
  productData:any[] = []
  user_id:number = 0
  username:string = ""
  balance:number = 0;
  
  ngOnInit(): void {
    this.getProducts()
    this.getUserInfo()
  }

  constructor(private _apiConnect:ApiConnectService) {}

  getProducts() {
    this._apiConnect.getSecure('productos')
    .subscribe({
      next: (response:any) => {
        this.productData = response.data
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }

  getUserInfo() {
    const objUs:any = this._apiConnect.decodeCookie()
    this.username = objUs.name
    this.user_id = objUs.user_id  
    this._apiConnect.getSecure(`users/${objUs.user_id}`)
    .subscribe({
      next:(response:any) => {
        this.balance = response.balance
      }
    })
  }

  buyProduct(product_id:number) {
    console.log(product_id);
    this._apiConnect.postSecure(`transacts/${product_id}/${this.user_id}`, null)
    .subscribe({
      next:(response:any) => {
        console.log(response)
        this.getUserInfo()
      },
      error:(error:any) => {
        console.log(error)
      }
    })
  }
  
}
