import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { FormsComponent } from './forms/forms.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  {
    path:"",
    component:LandingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"forms",
    component:FormsComponent
  },
  {
    path:"dashboard",
    component:SidebarComponent
  }
];
