import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AllWishesComponent,
  DetailWishComponent,
  CreateWishComponent
} from './components';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'all', component: AllWishesComponent },
  { path: 'detail/:id', component: DetailWishComponent },
  { path: 'create', component: CreateWishComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
