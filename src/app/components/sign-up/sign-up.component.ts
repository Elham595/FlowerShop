import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _Router:Router) { }

  signForm: FormGroup = new FormGroup({
    fullName:new FormControl(null,[Validators.required,Validators.maxLength(8)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Z][a-z]{1,9}$`)])
  })
  signSubmit(){
    console.log(this.signForm);
    this._Router.navigate(['home']);
  }
  ngOnInit(): void {
  }

}
