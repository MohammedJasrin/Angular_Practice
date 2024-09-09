import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name!:string;
  @Input() age!:number;
  @Input() status!:string;

  childData1!:string;
  childData2!:number;
  childData3!:string;





  @Output() sendData = new EventEmitter<{name:string,age:number,status:string}>()


  transferData(){
    this.sendData.emit({name:this.childData1,age:this.childData2,status:this.childData3})
  }
}
