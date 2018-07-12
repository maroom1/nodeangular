import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String = "Lion"
  age:number;
  email:String;
  address:Address;
  hobbies:String[];
  hello:any;

  constructor() { 
    console.log("constructor ran")
  }

  ngOnInit() {
    console.log("init log ran")
    this.name = "Elephant";
    this.age=30;
    this.email="test@test.com"
    this.address = {
      street:"1 N 1st st",
      city:"st louis",
      state:'CA'
    }
    this.hobbies=["read","write","print","loop"];
    this.hello="any";
  }
  onClick(){
    console.log("on click me button");
    if(this.name == "Tiger")
       this.name="Lion"
    else
      this.name="Tiger"
    
  }
}

interface Address{
  street:String,
    city:String,
    state:String
}
