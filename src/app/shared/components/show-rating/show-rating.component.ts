import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-rating',
  templateUrl: './show-rating.component.html',
  styleUrls: ['./show-rating.component.scss']
})
export class ShowRatingComponent implements OnInit {

  @Input() rate

  constructor() { }

  ngOnInit() {
  }

}
