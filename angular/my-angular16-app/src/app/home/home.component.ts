import { Component } from '@angular/core';
import { DemosvcService } from '../demosvc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private demoSvc: DemosvcService) {}

  getUserList() {
    console.log('In component');
    this.demoSvc.getUserDetails();
  }
}
