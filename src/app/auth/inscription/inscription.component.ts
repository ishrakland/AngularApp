import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  myform:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      display_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirm_password:new FormControl('',Validators.required),
    })
  }

  get f(){
    return this.myform.controls
  }

}