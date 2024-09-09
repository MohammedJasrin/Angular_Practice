import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Map<number,number> = new Map(); //mapping productId to quantity

  private notifySubject = new Subject<string>();

  notifySource$ = this.notifySubject.asObservable();



  constructor(private productService: ProductService) { }

  getCartItems():Map<number,number>{
    return this.cart
  }

  addProductToCart(product:Product,quantity:number):void{
    console.log("cart: "+JSON.stringify(product),quantity)
    if(this.cart.has(product.id)){
      this.cart.set(product.id,this.cart.get(product.id)!+quantity);
      console.log(this.cart)
    }else{
      this.cart.set(product.id,quantity);
      console.log(this.cart)
    }
    this.notifySubject.next("Product added");
  }

  removeProductFromCart(productId:number):void{
    this.cart.delete(productId);
  }

  updateProductQuantity(productId:number,quantity:number){
    if(this.cart.has(productId)){
      if(quantity>0){
        this.cart.set(productId,quantity)
      }else{
        this.cart.delete(productId);
      }
    }
  }

  getTotalQuantity():number{
    let total = 0;
    this.cart.forEach(quantity=>total+=quantity);
    return total;
  }



  getTotalPrice():number{
    let total = 0;
    this.cart.forEach((quantity,productId)=>{
      const product = this.productService.getProductById(productId);
      if(product){
        total+=product.price*quantity;
      }
    })

    return total;
  }

}
