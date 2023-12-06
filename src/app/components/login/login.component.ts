import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _Router:Router) { }

  check: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{1,9}$`)])
  });
  login:any;

  loginSubmit(){
    this.login = this.loginForm.value;
    console.log(this.login)
    this._Router.navigate(['home']);
    localStorage['login'] = JSON.stringify(this.login);
    console.log(JSON.parse(localStorage['login']));
    if (navigator.cookieEnabled === false)
    {
    console.log("Error: cookies not enabled!");
    }else{console.log("Fireeeeeeeeeee!");}
      }
  // signForm: FormGroup = new FormGroup({
  //   fullName:new FormControl(null,[Validators.required,Validators.maxLength(8)]),
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{1,9}$`)])
  // })
  // signSubmit(){
  //   // console.log(this.signForm)
  // }

  checked(){
    this.check = !this.check;
  }


  ngOnInit(): void {
  }

}
