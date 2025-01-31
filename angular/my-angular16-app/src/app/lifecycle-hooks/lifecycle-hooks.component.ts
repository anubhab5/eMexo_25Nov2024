import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
})
export class LifecycleHooksComponent {
  showComponent = true;

  counter = 1;
  counter1 = 1;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  incrementCounter() {
    this.counter++;
  }
}
