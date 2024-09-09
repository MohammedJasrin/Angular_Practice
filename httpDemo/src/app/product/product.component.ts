import { Component } from '@angular/core';
import { Product, ProductWithoutId } from '../../product';
import { ProductService } from '../product.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiResponse } from '../../ApiResponse'; // Ensure this path is correct
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productList: Product[] = [];

  productForm: FormGroup<{
    productName: FormControl<string | null>;
    productPrice: FormControl<number | null>;
    productDescription: FormControl<string | null>;
    category: FormControl<string | null>;
  }> = new FormGroup({
    productName: new FormControl<string | null>(null, [Validators.required]),
    productPrice: new FormControl<number | null>(null, [Validators.required]),
    productDescription: new FormControl<string | null>(null, [Validators.required]),
    category: new FormControl<string | null>(null, [Validators.required])
  });

  isPopupOpen:boolean = false; // Flag to control popup visibility
  currentProductId: number | null = null; //product being edited



  constructor(private productService: ProductService) {
    this.loadProducts();
  }



  openUpdatePopup(product: Product): void {
    this.productForm.setValue({
      productName: product.productName,
      productPrice: product.productPrice,
      productDescription: product.productDescription,
      category: product.category
    });
    this.currentProductId = product.productId;
    this.isPopupOpen = true;
  }


  closeUpdatePopup(): void {
    this.isPopupOpen = false;
    this.currentProductId = null;
    this.productForm.reset(); // Reset form fields
  }

  updateProduct(): void {
    if (this.currentProductId !== null) {
      const updatedProduct: ProductWithoutId = this.productForm.value as ProductWithoutId;
      this.productService.updateProduct(this.currentProductId, updatedProduct).subscribe({
        next: (response:ApiResponse<Product>) => {
          console.log(response)
          console.log('Product updated successfully');
          this.loadProducts(); // Reload products after update
          this.closeUpdatePopup(); // Close popup and reset form
        },
        error: (err) =>{
          alert(err.error.message)
          console.error('Error updating product:', err)
          this.closeUpdatePopup(); // Close popup and reset form
        }
      });
    }
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response: ApiResponse<Product[]>) => {
        if (response.success) {
          this.productList = response.data;
        } else {
          console.error('Failed to load products:', response.message);
        }
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }

  addProduct(): void {
    const productWithoutId: ProductWithoutId = this.productForm.value as ProductWithoutId;
    this.productService.addProduct(productWithoutId).subscribe({
      next: (response: ApiResponse<Product>) => {
        console.log(response)
        if (response.success) {
          console.log('Product added successfully:', response.data);
          this.loadProducts(); // Reload products after adding
          this.productForm.reset()
        } else {
          console.error('Failed to add product:', response.message);
        }
      },
      error: (err) => console.error('Error adding product:', err)
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: (response: ApiResponse<void>) => {
        if (response.success) {
          console.log('Product deleted successfully');
          this.loadProducts(); // Reload products after deletion
        } else {
          console.error('Failed to delete product:', response.message);
        }
      },
      error: (err) => console.error('Error deleting product:', err)
    });
  }
}
