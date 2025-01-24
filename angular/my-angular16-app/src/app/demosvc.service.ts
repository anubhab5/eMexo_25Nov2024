import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemosvcService {
  constructor() {}

  someOneLikedMe(data: string) {
    console.log(`The user liked the product ${data}`);
  }
}
