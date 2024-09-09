import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  afterRender,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() title: string = '';

  constructor() {
    console.log('       Child => constructor called');
    afterRender(() => {
      console.log('     Child => rendered');
    });
  }
  ngAfterViewChecked(): void {
    console.log('       Child => ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('       Child => ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('       Child => ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('       Child => ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('       Child => ngDoCheck');
  }

  ngOnInit(): void {
    console.log('       Child => ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('       Child => ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('       Child => ngOnDestroy');
  }
}
