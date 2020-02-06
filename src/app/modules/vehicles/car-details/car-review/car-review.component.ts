import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/shared/models/site-db/cars';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.scss']
})
export class CarReviewComponent implements OnInit {

  @Input() review: IReview;

  constructor() { }

  ngOnInit() {
  }

}
