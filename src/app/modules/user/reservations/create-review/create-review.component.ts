import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { IReservation } from 'src/app/shared/models/site-db/cars';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})

export class CreateReviewComponent implements OnInit {

  rate: number = 5;
  comment: string;

  constructor(
    public dialogRef: MatDialogRef<CreateReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private dbService: SiteCardbService
  ) {}

  ngOnInit() {
  }
  submitReview(): void {
    this.dbService.submitReview(this.data.reservation.id, this.data.reservation.car_id.id, this.rate, this.comment).subscribe(res => {
      this.dialogRef.close(true)
    },
    err => {
      console.log(err)
    })
  }
  onCancelClick(): void {
    this.dialogRef.close(false)
  }
}

