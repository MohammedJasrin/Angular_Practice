import { Injectable } from '@angular/core';
import { Product } from './product';
import ProductDetails from "./product.json"
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<Product> = ProductDetails;
  private url: string = 'https://fakeapistore/products';

  constructor(private http:HttpClient) { }

  fetchProducts():Observable<Array<Product>{
    this.products = this.http.get(this.url).subscribe();
  }

  getProductById(productId:number):Product | undefined{
    return this.products.find(product=>product.id === productId);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  filterProducts(
    searchQuery: string,
    selectedCategory: string,
    showAvailableOnly: boolean
  ): Array<Product> {
    return this.products.filter(product => {
      const searchQueryMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const selectedCategoryMatch = product.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const availabilityMatch = showAvailableOnly ? product.inStock : true;

      return searchQueryMatch && selectedCategoryMatch && availabilityMatch;
    });
  }
}
