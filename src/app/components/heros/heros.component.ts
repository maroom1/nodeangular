import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  title='Tour of Heros';
  heroes = HEROES;
 
  selectedHero: Hero;
  

  constructor() { 
    console.log("Hero invoked");

  }

  ngOnInit() {
    console.log("init heroes invokes");
    
    }
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

}