import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: RandomComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  //  Setting a default path
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
