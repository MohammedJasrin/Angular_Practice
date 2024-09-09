  import { Component,OnDestroy } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { FormComponent } from './form/form.component';
  import { ProductDetailComponent } from './product-detail/product-detail.component';
  import { ParentComponent } from './parent/parent.component';
  import { ReactiveComponent } from './reactive/reactive.component';
  import { FormbuilderComponent } from './formbuilder/formbuilder.component';
  import observable from '../observableTest';
  import { Subscription } from 'rxjs';
import { TestComponent } from './test/test.component';
import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,FormComponent,ProductDetailComponent,ParentComponent,ReactiveComponent,FormbuilderComponent,TestComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
  title="Just a title"
  data:Array<{index:number,data:string}> = []
  private sub$:Subscription = new Subscription();



  subscribe(){
    this.sub$ = observable.subscribe((data)=>{
      this.data.push(data)
    })
    console.log("subscribed")
  }

  unsubscribe(){
    this.sub$.unsubscribe();
    console.log("unsubscribed")
  }

  clear(){
    this.data = [];
    console.log("Data cleared")
  }

  }


