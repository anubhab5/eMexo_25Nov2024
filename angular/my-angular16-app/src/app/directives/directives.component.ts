import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  // active = 'active';
  isActive = true;

  clicked() {
    this.isActive = !this.isActive;
  }
}
