import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  totalItems:number=0

  constructor(private cartService: CartService){
    this.cartService.notifySource$.subscribe(data=>this.totalItems = cartService.getTotalQuantity())
  }

  


}
