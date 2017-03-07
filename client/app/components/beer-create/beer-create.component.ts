import { Component } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
import { BeerReview } from '../../vo/BeerReview';

import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'beer-create',
  templateUrl: 'app/components/beer-create/beer-create.component.html'
})
export class BeerCreateComponent {

  constructor(private heroService: HeroService) { }

  // beerReview: BeerReview = {
  //   _id : 1,
  //   beerName : "Pale Ale",
  //   reviewScore : 4,
  //   restaurant : "Pangyo Craftworks",
  //   reviewContent : "It was as refreshing as Golden ale that Beer House has"
  // };

  private beerReview = new BeerReview();

  addReview() {
    console.log(this.beerReview);
    this.heroService.addHeroes(this.beerReview).subscribe(
      // reviews => this.beerReviews = reviews,
      // error => this.errorMessage = <any>error
    );
  }

  // Google Map
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
