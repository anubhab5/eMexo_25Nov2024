import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  imports: [],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css',
})
export class CardHeaderComponent {
  @Input()
  cardHeader: string = '';

  studentObj = {
    firstName: 'tom',
    lastName: 'Cat',
    roll: 5,
    height: '100cm',
  };
}
