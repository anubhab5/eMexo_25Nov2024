import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { StarterComponent } from './starter/starter.component';

@NgModule({
  // all components needs to be present inside the declarations array
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    StarterComponent,
  ],
  // contains all the modules - custom module or a 3rd party module if installed
  imports: [BrowserModule, AppRoutingModule],
  //  add all services
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
