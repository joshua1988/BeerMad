import { Component, OnInit } from '@angular/core';

import { BeerReview } from '../../vo/BeerReview';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'beer-grid',
  templateUrl: 'app/components/beer-grid/beer-grid.component.html',
  styleUrls: ['app/components/beer-grid/beer-grid.component.css']
})

export class BeerGridComponent implements OnInit{
  errorMessage: string;
  beerReviews: BeerReview[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    // this.heroService.getHeroes()
    //              .subscribe(
    //                heroes => this.heroes = heroes,
    //                error =>  this.errorMessage = <any>error);

    this.heroService.getHeroes().subscribe(
                   reviews => this.beerReviews = reviews,
                   error => this.errorMessage = <any>error
                 );
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}
