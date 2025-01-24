import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css'],
})
export class CardFooterComponent {
  @Input() actions: { label: string }[] = [];

  @Input()
  title: string = '';

  @Output()
  likeClickedEvent = new EventEmitter();

  likeClicked() {
    console.log(this.title);
    console.log('Liked');
    this.likeClickedEvent.emit(this.title);
  }

  shareClicked(name: string) {
    console.log(name);
  }
}
