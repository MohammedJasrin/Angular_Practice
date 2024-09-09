import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];
