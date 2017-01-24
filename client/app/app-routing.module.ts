import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerGridComponent } from './ts/beer-grid.component';
import { BeerDetailComponent } from './ts/beer-detail.component';
import { BeerCreateComponent } from './ts/beer-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/beer-grid', pathMatch: 'full' },
  { path: 'beer-grid', component: BeerGridComponent },
  { path: 'beer-detail', component: BeerDetailComponent },
  { path: 'beer-create', component: BeerCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
