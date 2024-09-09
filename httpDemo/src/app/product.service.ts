import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductWithoutId } from '../product';
import { ApiResponse } from '../ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:9091/product';

  constructor(private http: HttpClient) { }

  // Fetch all products
  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(this.url);
  }

  // Add a new product
  addProduct(product: ProductWithoutId): Observable<ApiResponse<Product>> {
    return this.http.post<ApiResponse<Product>>(this.url, product);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.url}/${id}`);
  }

  updateProduct(id: number, product: ProductWithoutId): Observable<ApiResponse<Product>> {
    return this.http.put<ApiResponse<Product>>(`${this.url}/${id}`, product);

  }
}
