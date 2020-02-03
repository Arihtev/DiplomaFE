import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { ICar, IReservation } from 'src/app/shared/models/site-db/cars';

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrls: ['./manage-reservations.component.scss']
})
export class ManageReservationsComponent implements OnInit {

  car: ICar;
  upcomingReservations: IReservation[] = [];
  passedReservations: IReservation[] = [];
  canceledReservations: IReservation[] = [];

  loading = false;

  constructor(private activatedRoute: ActivatedRoute, private dbService: SiteCardbService) { }

  ngOnInit() {
    this.updateReservations()
  }

  updateReservations(){
    this.clearReservations()
    this.activatedRoute.params.subscribe(params => {
      this.dbService.car_details(params.id).subscribe((res: ICar) => {
        this.car = res
      }, err => {
        console.log(err)
      })
      this.dbService.getCarReservations(params.id).subscribe((res: IReservation[]) => {
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
    });
  }

  clearReservations(){
    this.upcomingReservations = [];
    this.passedReservations = [];
    this.canceledReservations = [];
  }
}
