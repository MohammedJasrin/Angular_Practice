import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TestComponent } from './component/test/test.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about/:id",
    loadComponent:()=> import("./component/about/about.component").then(m=>m.AboutComponent)
  },
  {
    path:"register",
    component:RegisterComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent,
        children:[
          {
            path:"something",
            component:AboutComponent
          }
        ]
      }
    ]
  },
  // {
  //   path:"dashboard",
  //   component:DashboardComponent
  // },
  {
    path:"test",
    component:TestComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];
