import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IReservation } from "src/app/shared/models/site-db/cars";
import { Router } from "@angular/router";
import { SiteCardbService } from "src/app/core/services/site-cardb/site-cardb.service";
import * as moment from "moment";
import { MatDialog } from "@angular/material";
import { CancelResComponent } from "../cancel-res/cancel-res.component";
import { CreateReviewComponent } from '../create-review/create-review.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language/language.service';

export interface IRefundable {
  date: Date;
  amount: string;
}

@Component({
  selector: "app-reservation-item",
  templateUrl: "./reservation-item.component.html",
  styleUrls: ["./reservation-item.component.scss"]
})

export class ReservationItemComponent implements OnInit {
  @Input() reservation: IReservation;
  @Output() refreshReservations: EventEmitter<any> = new EventEmitter();
  
  refundable: IRefundable;
  locale = "en";

  constructor(
    private router: Router,
    private dbService: SiteCardbService,
    public dialog: MatDialog,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    if (this.reservation.start_date) {
      this.refundable = this.checkRefundability(this.reservation.start_date);
    }
    
    this.locale = this.languageService.currentLang
    console.log(this.locale)
  }

  checkRefundability(start_date) : IRefundable {
    let today = new Date();
    let fullRefundDate = moment(start_date)
      .subtract(7, "days")
      .toDate();
    if (today <= fullRefundDate) {
      return {
        date: fullRefundDate,
        amount: "full"
      };
    }
    let halfRefundDate = moment(start_date)
      .subtract(2, "days")
      .toDate();
    if (today <= halfRefundDate) {
      return {
        date: halfRefundDate,
        amount: "half"
      };
    }
    return ;
  }

  carDetails() {
    this.router.navigate([`/cars/${this.reservation.car_id.id}`]);
  }

  declineReservation() {
    this.openDialog(CancelResComponent, {
      width: "450px",
      data: {
        reservation: this.reservation,
        refundable: this.refundable
      },
      autoFocus: false,
      // disableClose: true
    });
  }

  reviewReservation(){
    this.openDialog(CreateReviewComponent,{
      width: "450px",
      data: {
        reservation: this.reservation,
      },
      autoFocus: false,
    });
  }

  openDialog(component, options): void {
    const dialogRef = this.dialog.open(component,options);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result){
        this.refreshReservations.emit()
      }
    });
  }
}
