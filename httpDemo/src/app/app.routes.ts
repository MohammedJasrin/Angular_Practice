import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path:"",
    component:UserComponent
  },
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"product",
    component:ProductComponent
  }
];




