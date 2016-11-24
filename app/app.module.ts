import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { BeerGridComponent } from './ts/beer-grid.component';
import { BeerDetailComponent } from './ts/beer-detail.component';
import { BeerCreateComponent } from './ts/beer-create.component';

@NgModule({
  imports:      [ BrowserModule,
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
    ])
  ],
  declarations: [ AppComponent, BeerGridComponent, BeerDetailComponent , BeerCreateComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
