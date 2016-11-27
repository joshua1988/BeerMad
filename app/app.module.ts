import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { BeerGridComponent } from './ts/beer-grid.component';
import { BeerDetailComponent } from './ts/beer-detail.component';
import { BeerCreateComponent } from './ts/beer-create.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/beer-grid',
        pathMatch: 'full'
      },
      {
        path: 'beer-grid',
        component: BeerGridComponent
      },
      {
        path: 'beer-detail',
        component: BeerDetailComponent
      },
      {
        path: 'beer-create',
        component: BeerCreateComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: '../mapKey.json'
    })
  ],
  declarations: [ AppComponent, BeerGridComponent, BeerDetailComponent , BeerCreateComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
