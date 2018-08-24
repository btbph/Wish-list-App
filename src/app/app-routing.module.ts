import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllWishesComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'all', component: AllWishesComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
