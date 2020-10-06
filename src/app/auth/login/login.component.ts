import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private route : Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      username:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required),
    })
  }

  auth(){
    let user = JSON.parse(localStorage.getItem('user'))
    if(user.email == this.login.controls.username.value && user.password == this.login.controls.password.value){
      this.route.navigate(['/'])
    }
  }

}
