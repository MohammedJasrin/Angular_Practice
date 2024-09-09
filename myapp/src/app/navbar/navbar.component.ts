import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CartComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  numberOfProducts:number = 0

  constructor(private cartService:CartService){
    this.numberOfProducts=this.cartService.getTotalQuantity();
  }

}
