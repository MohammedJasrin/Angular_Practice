import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit,afterRender } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [LifecycleComponent,FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnChanges,OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  isOpen:boolean = false
  title:string='hello'

  toggle(){
    this.isOpen = !this.isOpen;
  }

  constructor(){
    console.log('Parent==>constructor');
    afterRender(() => {
      console.log('     Parent => rendered');
    });
  }

  ngOnChanges() {
    console.log('Parent==>ngOnChanges');
  }

  ngOnInit() {
    console.log('Parent==>ngOnInit');
  }

  ngDoCheck() {
    console.log('Parent==>ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Parent==>ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent==>ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Parent==>AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent==>AfterViewChecked');
    // this.message=this.viewChild.message;
  }
}
