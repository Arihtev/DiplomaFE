import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/shared/models/site-db/cars';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.scss']
})
export class CarReviewComponent implements OnInit {

  @Input() review: IReview;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
