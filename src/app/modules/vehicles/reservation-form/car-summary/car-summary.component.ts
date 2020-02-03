import { Component, OnInit, Input } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss']
})
export class CarSummaryComponent implements OnInit {

  @Input() car: any;
  @Input() selectedMoments;
  @Input() daysReserved;
  @Input() discount;
  @Input() reservationPrice;
  refundable;

  constructor() { }

  ngOnInit() {
    if (this.selectedMoments[0]){
      let today = new Date();
      console.log(today);
      let refundEndDate = moment(this.selectedMoments[0]).subtract(7, 'days').toDate();
      console.log(refundEndDate);
      if (today <= refundEndDate){
        this.refundable = refundEndDate;
      }
    }
  }

}
