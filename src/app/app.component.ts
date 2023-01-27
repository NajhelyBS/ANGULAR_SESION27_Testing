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