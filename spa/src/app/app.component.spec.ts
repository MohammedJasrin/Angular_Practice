import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, Router } from '@angular/router';
describe('AppComponent', () => {
  let router:Router;
  let navigateSpy:jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[provideRouter([])]
    }).compileComponents();

    router = TestBed.inject(Router);
    navigateSpy = spyOn(router,'navigate');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'spa' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spa');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, spa');
  });

  it('a should have the value 10',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.a).toEqual(10)
  })

  it('should navigate to the specified route when changeRoute is called',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const path = '/test-path';
    app.changeRoute(path);
    expect(navigateSpy).toHaveBeenCalledWith([path])
  })
});
