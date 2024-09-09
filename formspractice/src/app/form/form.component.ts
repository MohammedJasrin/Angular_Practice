import { Component } from '@angular/core';
import { Product } from '../../ProductModel2';
import { ProductService } from '../product.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private productService: ProductService){}

  product: Product = {
    id:null,
    brand:null,
    quantity:null,
    price:null
  };


  addProduct(form:NgForm){
    // console.log(this.product)
    // this.productService.addProduct(this.product)
    // this.product={
    //   id:0,
    //   brand:"",
    //   quantity:0,
    //   price:0
    // }
    console.log(form.value)
  }

}
