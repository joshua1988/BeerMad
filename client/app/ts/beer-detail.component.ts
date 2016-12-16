import { Component } from '@angular/core';

@Component({
  selector: 'beer-detail',
  template: `
    <p>Let's see the detail view</p>
    <div>{{name}}</div>
  `
})

export class BeerDetailComponent {
  // title = 'Tour of Heroes';
  name = 'Beer is the proof that God loves us';
}
