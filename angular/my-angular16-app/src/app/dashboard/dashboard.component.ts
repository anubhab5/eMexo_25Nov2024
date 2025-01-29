import { Component } from '@angular/core';
import { DemosvcService } from '../demosvc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DemosvcService],
})
export class DashboardComponent {
  constructor(private svc: DemosvcService) {}

  getDetails() {
    this.svc.getUserDetails();
  }
}
