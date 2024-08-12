import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ImgInputComponent } from '../img-input/img-input.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild(ImgInputComponent) v = new ImgInputComponent() 
  @Input() modalTitle:string = ""
  @Output() guardar:EventEmitter<any> = new EventEmitter()
  @Output() guardarEdit:EventEmitter<any> = new EventEmitter()
  @Output() guardarUser:EventEmitter<any> = new EventEmitter()
}
