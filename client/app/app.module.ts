import './modules/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';

import { BeerGridComponent } from './components/beer-grid/beer-grid.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';
import { BeerCreateComponent } from './components/beer-create/beer-create.component';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { HeroService } from './services/hero.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
// import { MaterializeDirective } from "angular2-materialize";

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AgmCoreModule.forRoot({
      apiKey: '../mapKey.json'
    })
  ],
  declarations: [ AppComponent, BeerGridComponent, BeerDetailComponent , BeerCreateComponent],
  bootstrap: [ AppComponent ],
  providers: [
    HeroService
  ]
  // providers: [
  //   {provide: LazyMapsAPILoaderConfig}
  // ]
})
export class AppModule { }
