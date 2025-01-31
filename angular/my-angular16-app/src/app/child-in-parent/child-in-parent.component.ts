import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-in-parent',
  templateUrl: './child-in-parent.component.html',
  styleUrls: ['./child-in-parent.component.css'],
})
export class ChildInParentComponent {
  @Input()
  counter = 0;

  @Input()
  counter1 = 0;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    // every time any of the input variable changes ngOnChanges will be called;
    // first hook to be called
    console.log('ngonchange called');
  }

  // called only once to initialize the component
  ngOnInit() {
    console.log('ngoninit called');
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngOnDestroy() {
    console.log('ngondestroy called');
  }
}
