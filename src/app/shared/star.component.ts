import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClickEvent: EventEmitter<string>;
  startWidth: number;

  constructor() {
    this.ratingClickEvent = new EventEmitter(false);
  }

  onRatingClicked(): void {
    console.log(`The rating ${this.rating} was clicked`);
    this.ratingClickEvent.emit(this.rating.toString());
  }

  ngOnChanges(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.startWidth = this.rating * 75 / 5;
  }
}
