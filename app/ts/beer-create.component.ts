import { Component } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';
import { BeerReview } from './vo/BeerReview';

@Component({
  selector: 'beer-create',
  templateUrl: 'app/html/beer-create.component.html'
})
export class BeerCreateComponent {

  beerReview: BeerReview = {
    _id : 1,
    reviewContent : "First Review",
    reviewScore : 4,
    image : "no image",
    restaurant : "Pangyo Craftworks",
  };

  // Google Map
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
