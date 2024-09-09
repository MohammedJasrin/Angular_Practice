import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { CurrencyPipe,UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  showAvailableOnly: boolean = false;

  //temporary solution
  cartProductQuantity:number=0;

  constructor(private productService: ProductService,private cartService:CartService) {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  updateProductSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.filterProducts();
  }

  updateProductSelectionFilter(event: any): void {
    this.selectedCategory = event.target.value;
    this.filterProducts();
  }

  updateProductAvailabilityFilter(event: any): void {
    this.showAvailableOnly = event.target.checked;
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.productService.filterProducts(
      this.searchQuery,
      this.selectedCategory,
      this.showAvailableOnly
    );

  }


  updateProductCart(){
    this.cartProductQuantity=this.cartService.getTotalQuantity();
  }

  addToCart(product:Product){
    this.cartService.addProductToCart(product,1);
    this.updateProductCart();

  }

}
