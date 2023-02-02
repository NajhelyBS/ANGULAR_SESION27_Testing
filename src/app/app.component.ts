import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'login-testing';
  name = "";
  pass = "";
  valido = false;
  invalido = false;

  public Loginform!: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    
    
    this.Loginform = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })

  }

  
  ngOnInit(): void {
    this.Loginform = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      
    });
  }


   // | Mensajes de errores de validación
   getErrorMessage() {
    if (this.Loginform.controls['username'].hasError('required')) {
      return 'The username is required';
    }

    return this.Loginform.controls['username'].hasError('minlength') ? 'It needs to be at least 4 characters' : '';
  }

  Messagepassword(){
    if (this.Loginform.controls['password'].hasError('required')){
      return 'The password is required';
    }

    return this.Loginform.controls['password'].hasError('minlength') ? 'It needs to be at least 4 characters' : '';

  }

  //Mensajes de erores de validación |

  send(): any{
    console.log(this.Loginform.value);

}

Login() {
  if(this.Loginform.valid == true){
    this.valido = true;
    this.invalido = false;

  }else if ( this.Loginform.valid == false) {
    this.invalido = true;
    this.valido = false;

  }
}
}