import { Component, OnInit } from '@angular/core';
import { Hero } from './vo/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'beer-grid',
  templateUrl: 'app/html/beer-grid.component.html',
  styleUrls: ['app/css/beer-grid.component.css']
})

export class BeerGridComponent implements OnInit{
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}
