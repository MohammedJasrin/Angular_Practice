import { Injectable } from '@angular/core';
import { Product } from '../ProductModel2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<Product> = [];

  constructor() { }

  getProductById(productId:number):Product | undefined{
    return this.products.find(product=>product.id === productId);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  addProduct(product:Product){
    this.products.push(product);
    console.log(this.products)
  }



}
