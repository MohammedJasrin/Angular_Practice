import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [ButtonModule,CardModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {

}
