import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { StarEvent } from './star';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input()
  rating = 0;

  @Output()
  ratingClicked: EventEmitter<StarEvent> = new EventEmitter<StarEvent>();

  cropWidth = 75;

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick() {
    let starEvent = new StarEvent(this.rating, `The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(starEvent);
  }

}
