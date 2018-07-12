import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { subscribeOn } from '../../../../node_modules/rxjs/operators';
import { Subscription } from '../../../../node_modules/rxjs';

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
  posts:Post[];
  isEdit:Boolean=false;

  constructor(private dataService:DataService) { 
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
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts=posts;
    });
  }
  onClick(){
    console.log("on click me button");
    if(this.name == "Tiger")
       this.name="Lion";
    else
      this.name="Tiger";
      this.hobbies.push("NewHobby");
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0;i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
  }

 
}
interface Post{
  title:String,
  id:number,
  body:String,
  userId:number
}
interface Address{
  street:String,
    city:String,
    state:String
}
