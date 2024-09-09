import { Component } from '@angular/core';
import { Product2Service } from '../product2.service';
import { Product } from '../../ProductModel3';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  products:Array<Product>=[]
  constructor(productService:Product2Service){
    productService.getProducts().subscribe((products:Product[])=>{
      this.products = products
    })
  }



}
