import { ICar, IFilters, ICreateReservation } from '../../../../shared/models/site-db/cars';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthenticationComponent } from 'src/app/core/authentication/authentication.component';
import { Router } from '@angular/router';
import * as moment from "moment";
import { OwlDateTimeComponent } from 'ng-pick-datetime';

@Component({
  selector: 'app-car-reservation-tab',
  templateUrl: './car-reservation-tab.component.html',
  styleUrls: ['./car-reservation-tab.component.scss']
})
export class CarReservationTabComponent implements OnInit {

  @Input() car: ICar;
  @Input() filters: IFilters;

  bsModalRef: BsModalRef;
  loginComponent = {title: "HOME.AUTH.LOGIN.LOGIN", component: "login"}
  discount = 0;
  reservationPrice = 7;

  daysReserved: number = 0

  today = new Date();
  min = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate());
  max
  // start = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate())
  // end = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+1, )

  disabledDays: Array<Date> = []

  public selectedMoments = [
    // this.start,
    // this.end
  ];

  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private authService: AuthService, private modalService: BsModalService, private router: Router) {}

  ngOnInit() { 
    if (window.history.state.filters && this.filters.start && this.filters.end){
      this.selectedMoments=[this.filters.start, this.filters.end]
      this.calculateReservedDays(this.selectedMoments)
    }
    if (this.car.reservations.length){
      this.reservationsToDates(this.car.reservations)
    }
  }

  private loggedIn() {
    return this.authService.loggedIn()
  }

  private calculateReservedDays(days){
    var Difference_In_Time = days[1].getTime() - days[0].getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1; 
    this.daysReserved = Math.round(Difference_In_Days)
    
    if (Difference_In_Days >= 30 && this.car.monthly_discount > 0){
      this.discount = this.car.monthly_discount
    }
    else if (Difference_In_Days >= 7 && this.car.weekly_discount > 0){
      this.discount = this.car.weekly_discount
    }
    else{
      this.discount = 0
    }
    let basePrice = (this.car.price * this.daysReserved)
    let discount = (this.car.price * this.daysReserved) * (this.discount/100)
    this.reservationPrice = Math.round((basePrice - discount + 7)*100)/100
  }

  private openModalWithComponent(component) {
    const initialState = {
      title: component.title,
      component: component.component
    };
    this.bsModalRef = this.modalService.show(AuthenticationComponent, {ignoreBackdropClick: true, class: "modal-dialog-centered", initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  private openReservationForm(){
    // console.log(this.car)
    // console.log(this.filters)
    this.router.navigate([`/cars/${this.car.id}/reservation`], { 
      state: { 
        car: this.car, 
        selectedMoments: this.selectedMoments,
        daysReserved: this.daysReserved,
        discount: this.discount,
        reservationPrice: this.reservationPrice
      } 
    })
  }

  private reservationsToDates(reservations){
    reservations.forEach((res: ICreateReservation) => {
      this.getDates(res.start_date,  res.end_date)
    });
  }

  private getDates(start, end){
    let startDate = moment(start, 'YYYY-MM-DD').toDate()
    let endDate = moment(end, 'YYYY-MM-DD').toDate()
    while (startDate <= endDate){
      this.disabledDays.push(new Date(startDate))
      startDate.setDate(startDate.getDate() + 1)
    }
  }

  private datesFilter = (d: Date): boolean => {
    const day = moment(d).format('YYYY-MM-DD')
    // const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6;
    return !this.disabledDays.find(date => moment(date).format('YYYY-MM-DD') == moment(day).format('YYYY-MM-DD'))
  }

  private processDates(dates) {
    if (dates){
      if (dates[0]!=null && dates[1]==null){
        this.max = this.calculateMaxDate(dates[0])
      }
      else if(dates[0]!=null && dates[1]!=null){
        this.max = null
        this.calculateReservedDays(dates)
      }
    }
  }

  calculateMaxDate(date){
    if (this.disabledDays.length){
      for (let i = 0; i <= this.disabledDays.length; i++){
        if (date<this.disabledDays[i]){
          return this.disabledDays[i]
        }
      }
    }
    else {
      return null
    }
  }

  resetDates(){
    this.selectedMoments = []
    this.max = null
  }
}
