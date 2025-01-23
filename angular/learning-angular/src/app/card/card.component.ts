import { Component, Input } from '@angular/core';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardBodyComponent } from '../card-body/card-body.component';
import { CardFooterComponent } from '../card-footer/card-footer.component';

@Component({
  selector: 'app-card',
  imports: [CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  productTitle: string = '';
}
