import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalTitle:string = ""
  @Output() guardar:EventEmitter<any> = new EventEmitter()
  @Output() guardarEdit:EventEmitter<any> = new EventEmitter()
  @Output() guardarUser:EventEmitter<any> = new EventEmitter()

}
