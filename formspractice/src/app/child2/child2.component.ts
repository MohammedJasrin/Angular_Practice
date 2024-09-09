import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  childItem:string|undefined;

  @Output() childEvent = new EventEmitter<string>;

  addChildItem(){
    this.childEvent.emit(this.childItem);
    this.childItem=""
  }
}
