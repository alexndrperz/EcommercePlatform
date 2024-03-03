import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-transacts-admin',
  templateUrl: './transacts-admin.component.html',
  styleUrls: ['./transacts-admin.component.css']
})
export class TransactsAdminComponent implements OnInit {
  transactsData:any[] = []
  totalSis:number = 0;

  ngOnInit() {
    this.getTransacts()
  }
  
  constructor(private _apiConnect:ApiConnectService) {}

  getTransacts() {
    this._apiConnect.getSecure('transacts')
    .subscribe({
      next: (response:any) => {
        this.transactsData = response.data;
        this.totalSis = this.calculateTotalTransacts(response.data);

      },
      error:(error:any)=> {
        console.log(error)
      }
    })
  }


  calculateTotalTransacts(transacts:any[]) {
    let total = 0
    transacts.forEach(item => {
      total += parseFloat( item.total)
    });
    console.log(total);
    return total
    

  }
}
