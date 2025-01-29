import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { StarterComponent } from './starter/starter.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RandomComponent } from './random/random.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // all components needs to be present inside the declarations array
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    StarterComponent,
    AboutComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    PricingComponent,
    NotFoundComponent,
    RandomComponent,
    ProductsComponent,
    FormComponent,
  ],
  // contains all the modules - custom module or a 3rd party module if installed
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  //  add all services
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
