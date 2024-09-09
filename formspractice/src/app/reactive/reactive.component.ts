import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  productForm = new FormGroup({
    productId: new FormControl(null,[Validators.required,Validators.min(1),Validators.max(9)]),
    brand: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    qty: new FormControl(null,[Validators.required,Validators.min(1)]),
    price: new FormControl(null,[Validators.required,Validators.min(100)])
  });

  addProduct(){
    console.log(this.productForm)
    console.warn(this.productForm.value)
    console.log(this.productForm.controls['price'].value)
  }



}


