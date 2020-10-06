import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  img : string = "https://infinitiliveaboard.com/public/images/Diving.png";
  email : string = "user@email.com"
  name : string = "user"
  phone:number;
  about:string;
  id:number;
  heroName:string;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    let user = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      about:this.about
    }
    console.log(user)
    // alert(this.email + " " + this.name)
  }
  
  addHeros(){
    this.HEROES.push({id:this.id,name:this.heroName})
  }
}
