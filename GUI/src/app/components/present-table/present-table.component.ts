import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-present-table',
  templateUrl: './present-table.component.html',
  styleUrls: ['./present-table.component.css']
})
export class PresentTableComponent {
  @Input() typeTable:string =""
  @Input() headerTable:string[] =[]
  @Input() data:any[] =[]
  @Input() isUserData:boolean =false
  @Output() productoCSave:EventEmitter<any> = new EventEmitter()
  @Output() productoESave:EventEmitter<any> = new EventEmitter()
  @Output() createUserEvt:EventEmitter<any> = new EventEmitter()
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter()
  @Output() deleteEventUser:EventEmitter<any> = new EventEmitter()
  typeAction:string = ""
  formData:any = {
    name:'',
    price:''
  }

  formDataUser:any = {
    name:'',
    password:''
  }

  createUser() {
   this.createUserEvt.emit(this.formDataUser)
    
  }

  openAddModalUser() {
    console.log(222)
    this.typeAction = "Agregar Usuario"
  }

  openAddModal() {
    this.typeAction = "Añadir Producto"
    if(this.formData.id) {
      delete this.formData.id
    }
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  crearProducto() {
    this.productoCSave.emit(this.formData)
  }

  editarProducto() {
    this.productoESave.emit(this.formData)
  }




  openEditModal(item:any) {
    this.formData.id = item.id
    this.formData.name = item.name 
    this.formData.price = item.price
    this.typeAction = "Editar Producto" 
  }
  
}
