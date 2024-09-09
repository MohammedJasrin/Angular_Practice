import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path:"",
    component:FormComponent
  },
  {
    path:"reactive",
    component:ReactiveComponent
  },
  {
    path:"builder",
    component:FormbuilderComponent
  },
  {
    path:"parent",
    component:ParentComponent
  },
  {
    path:"parent2",
    component:Parent2Component
  },
  {
    path:"test",
    component:TestComponent
  }
];
