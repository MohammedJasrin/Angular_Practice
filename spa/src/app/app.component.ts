import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TestComponent } from './component/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    DashboardComponent,
    NotFoundComponent,
    TestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'spa';
  a = 10;

  constructor(private router: Router) {}

  changeRoute(path: string) {
    this.router.navigate([path]);
  }
}
