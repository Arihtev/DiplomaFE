import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { IReservation } from 'src/app/shared/models/site-db/cars';
import { IRefundable } from '../reservation-item/reservation-item.component';

interface ReservationCancelation {
  reservation: IReservation,
  refundable: IRefundable
}

@Component({
  selector: 'app-cancel-res',
  templateUrl: './cancel-res.component.html',
  styleUrls: ['./cancel-res.component.scss']
})

export class CancelResComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CancelResComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationCancelation,
    private router: Router,
    private dbService: SiteCardbService
  ) {}

  ngOnInit() {
  }
  cancelReservation(): void {
    const reservationStatus =  `${this.data.refundable.amount}_refund`;
    const totalPrice = this.data.reservation.total_price
    const halfPrice = Number(totalPrice)/2
    const priceAfter = this.data.refundable.amount=="half" ? parseFloat(halfPrice.toString()).toFixed(2) : 0
    this.dbService.cancelReservation(this.data.reservation.id, reservationStatus, priceAfter).subscribe(res => {
      this.dialogRef.close(true)
    },
    err => {
      console.log(err)
    })
  }
  onNoClick(): void {
    this.dialogRef.close(false)
  }
}

