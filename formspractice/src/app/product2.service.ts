import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../ProductModel3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product2Service {

  url:string = 'https://fakestoreapi.com/products'

  constructor(private http:HttpClient) { }

  saveProduct(product: Product):Observable<void>{
    return this.http.post<void>(this.url,product)
  }

  getProducts():Observable<Product[]>{
   return this.http.get<Product[]>(this.url);
  }


}
