import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemosvcService {
  constructor(private http: HttpClient) {}

  someOneLikedMe(data: string) {
    console.log(`The user liked the product ${data}`);
  }

  // subscribe takes 2 arguments
  // these 2 are special arg => they are callbacks
  // 1st callback ::: api returned data/
  // 2nd callback ::: in ***any*** error scenario
  getUserDetails() {
    console.log('In service');
    this.http.get('http://localhost:8080/api/getuserdetails').subscribe(
      (resp) => {
        console.log('success');
      },
      (err) => {
        console.log('error');
      }
    );
  }

  updateUserDetails() {
    console.log('In service');
    this.http.put('http://localhost:8080/api/getuserdetails', {}).subscribe(
      (resp) => {
        console.log('success');
      },
      (err) => {
        console.log('error');
      }
    );
  }

  patchUserDetails() {
    console.log('In service');
    this.http.put('http://localhost:8080/api/getuserdetails', {}).subscribe(
      (resp) => {
        console.log('success');
      },
      (err) => {
        console.log('error');
      }
    );
  }
}
