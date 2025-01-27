import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      // this.router.navigate(['/pricing']);
    }, 3000);
  }

  pricingClicked() {
    console.log('clicked');
    this.router.navigate(['/pricing']);
  }
}
