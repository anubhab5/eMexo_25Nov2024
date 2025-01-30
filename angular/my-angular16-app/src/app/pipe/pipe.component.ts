import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent {
  ourCountry = 'india';
  allLowerCase = 'tom is a bad cat!';
  price = 12.9876;

  priceList = [12.9876, 13, 81, 45];

  discount = 0.45;

  currentDate = new Date();

  myCustomNumber = 5;
}
