import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormArray,Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Product } from '../../ProductModel';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {


  formBuilder = new FormBuilder();

  product:Product = {
    productId:null,
    brand:null,
    description:{
      age:null,
      seasons:null
    },
    qty:null,
    price:null,
    suppliers:[null]
  }


  productForm = this.formBuilder.group({
    productId:[null,[Validators.required,Validators.minLength(8)]],
    brand:[null],
    description:this.formBuilder.group({
      age:[null],
      seasons:[null]
    }),
    qty:[null],
    price:[null],
    suppliers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });




  addProduct(){
    this.product = this.productForm.value as Product
    console.warn(this.product)
  }

  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(){
    this.suppliers.push(this.formBuilder.control(''  ))
  }


}
