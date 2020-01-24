import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss']
})
export class CarSummaryComponent implements OnInit {

  @Input() car: any
  @Input() selectedMoments

  constructor() { }

  ngOnInit() {
  }

}
