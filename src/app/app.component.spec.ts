import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('login-testing app is running!');
  });

  it('Espero un resultado inválido del formulario', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    let Loginform = app.Loginform;

    let username = app.Loginform.controls['username'];
    let password = app.Loginform.controls['password'];
  
    username.setValue('Na'); //menos carácteres de los requeridos
    password.setValue('12'); //menos carácteres de los requeridos

    expect(app.Loginform.invalid).toBeTruthy();


  });

  it('Espero un resultado válido del formulario', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    let Loginform = app.Loginform;

    let username = app.Loginform.controls['username'];
    let password = app.Loginform.controls['password'];
    
    username.setValue('NajhelyBS'); //datos que deberían ser aceptados
    password.setValue('123456'); //datos que deberían ser aceptados

    expect(app.Loginform.valid).toBeTruthy();

  });

});
