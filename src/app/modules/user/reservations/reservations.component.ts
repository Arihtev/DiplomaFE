import { Component, OnInit } from '@angular/core';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { ICreateReservation, IReservation } from 'src/app/shared/models/site-db/cars';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  upcomingReservations: IReservation[] = [];
  passedReservations: IReservation[] = [];
  canceledReservations: IReservation[] = [];
  loading = false;

  constructor(private dbService: SiteCardbService) { }

  ngOnInit() {
    this.updateReservations();
  }

  updateReservations(){
    this.clearReservations()
    this.loading = true;
    this.dbService.getUserReservations().subscribe((res: IReservation[]) => {
      // console.log(res)
      res.forEach(reservation => {
        if (reservation.present){
          this.upcomingReservations.push(reservation)
        }
        else{
          if (reservation.status == 'paid'){
            this.passedReservations.push(reservation)
          }
          else{
            this.canceledReservations.push(reservation)
          }
        }
      });
      this.loading = false;
    }, err => {
      console.log(err)
    })
  }

  clearReservations(){
    this.upcomingReservations = [];
    this.passedReservations = [];
    this.canceledReservations = [];
  }
}
