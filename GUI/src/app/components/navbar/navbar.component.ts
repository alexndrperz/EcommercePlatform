import { Component, Input } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() activeRoute:string = ""
  
  @Input() is_buyer_view:boolean = false
  
  /**
   *
   */
  constructor(private _apiConnect:ApiConnectService) {
    
  }

  downloadRep() {
		this._apiConnect.getExcelReport('/transacts/report')
		.subscribe({
			next:(response:Blob) => {
				this.downloadReport(response)
			}
		})
	}

	private downloadReport(data:Blob) {
		const url:string = window.URL.createObjectURL(data);
		const anchor:HTMLAnchorElement = document.createElement('a');
		const actDate:string = new Date().toString()
    const pipe = new DatePipe('en-US')
    const actualDate = pipe.transform(actDate, 'dd-MM-yyyy')
		
		anchor.href = url;
		anchor.download = `Reporte de ventas (${actualDate}).xlsx`
		anchor.click()
	}	
}
