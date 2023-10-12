import { Component } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-see-transacts-byr',
  templateUrl: './see-transacts-byr.component.html',
  styleUrls: ['./see-transacts-byr.component.css']
})
export class SeeTransactsByrComponent {
  transactsData:any[] = []
  user_id:number = 0
  username:string = ""
  balance:number = 0;
  
  ngOnInit(): void {
    this.getUserInfo()
    this.getTransactsUserBased()
  }

  constructor(private _apiConnect:ApiConnectService) {}

  getTransactsUserBased() {
    this._apiConnect.getSecure(`transacts/user/${this.user_id}`)
    .subscribe({
      next: (response:any) => {
        console.log(response.data)
        this.transactsData = response.data
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


  
}
