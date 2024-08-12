import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.css']
})
export class ImgInputComponent {
  selectedImageSrc: string | ArrayBuffer | null = null;
  @ViewChild('fileInput') fileInput: ElementRef;
	@Input() formData:any =  null 
	imageUpload:boolean = false;
	alert:any = {
		text:"",
		show:false
	}
  constructor() {
	console.log(this.selectedImageSrc);
	
	
		this.fileInput = new ElementRef(null)
	}

  onDrop(event: any) {
		event.preventDefault();


		let files = null
		if (event.type == "change") {
			files = event.target.files;
		}
		else {
			files = event.dataTransfer.files;
		}

		this.handleImageUpload(files);
	}

	onDragOver(event: any) {
		event.preventDefault();
	}

	onFileSelected(event: any) {
		const selectedFile = event.target.files[0];

	}

  
	showImage(srcImage:any) {		
		if(srcImage && this.selectedImageSrc ==null) {
			
			return srcImage
		}
		if(this.selectedImageSrc) {
			return this.selectedImageSrc
		}
	}

	validateIfItsImage(file:File) {
		const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    	if(!validTypes.includes(file.type)) {
			this.alert = {
				show:true,
				text:"Debe ser una imagen"
			}
			return false;
		}
		return true
	}


	cleanImageInput() {
		this.selectedImageSrc = null
		this.formData.image = null
		this.imageUpload = false
		this.fileInput.nativeElement.value = ''
	}


  handleImageUpload(files: FileList) {
		const file = files[0];
	
		const success  = this.validateIfItsImage(file)
		if (file && success) {
			this.formData.image = file	
			this.imageUpload = true
			// Cargar la imagen seleccionada como una URL de datos (data URL)
			const reader = new FileReader();
			reader.onload = (e: any) => {
				this.selectedImageSrc = e.target.result;

			};
			reader.readAsDataURL(file);
		}
	}

  openFileInput() {
		this.fileInput.nativeElement.click();
	}

}

