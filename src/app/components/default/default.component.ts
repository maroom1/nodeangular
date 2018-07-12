import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  
  name = 'Angular!';
  isTog:Boolean=true;
  paths='../../assets/img/1.gif'
  //'../../assets/img/2.gif',
  //'../../assets/img/3.gif',
  //'../../assets/img/4.gif'];
  
  constructor() { }

  ngOnInit() {
  }



}
