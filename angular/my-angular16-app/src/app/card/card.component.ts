import { Component, Input } from '@angular/core';
import { DemosvcService } from '../demosvc.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = 'Default Title';
  @Input() subtitle: string = 'Default Subtitle';

  @Input() imageSrc: string = '';
  @Input() actions: { label: string }[] = [];

  // DEPENDENCY INJECTION
  constructor(private svc: DemosvcService) {}

  likeClicked(data: string) {
    console.log('like clicked from child', data);
    this.svc.someOneLikedMe(data);
    debugger;
  }
}
