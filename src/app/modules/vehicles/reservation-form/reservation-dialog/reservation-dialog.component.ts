import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ICar } from "src/app/shared/models/site-db/cars";
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language/language.service';

export interface ReservationData {
  car: ICar;
  dates: any[];
}

@Component({
  selector: "app-reservation-dialog",
  templateUrl: "./reservation-dialog.component.html",
  styleUrls: ["./reservation-dialog.component.scss"]
})
export class ReservationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationData,
    private router: Router,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['user/reservations/'])
  }
}
