import { Component, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  name="";
  age:number|null=null;
  status=''

  childData1=''
  childData2!:number;
  childData3=''

  parentData1!:string;
  parentData2!:number;
  parentData3!:string;



  transferData(){
    this.childData1=this.name;
    this.childData2 = this.age!;
    this.childData3 = this.status;
  }



  childTriggered(data:Data){
    this.parentData1=data.name;
    this.parentData2=data.age;
    this.parentData3=data.status;

  }


}


interface Data{
  name:string,
  age:number,
  status:string
}