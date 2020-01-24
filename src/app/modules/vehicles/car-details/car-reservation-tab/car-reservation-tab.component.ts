import { ICar, IFilters, IReservation } from '../../../../shared/models/site-db/cars';
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
  loginComponent = {title: "Логин", component: "login"}

  daysReserved: number = 0

  today = new Date();
  min = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate());
  // start = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate())
  // end = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+1, )

  disabledDays: Array<Date> = []

  changes: MutationObserver

  // public domChange = new EventEmitter();

  public selectedMoments = [
    // this.start,
    // this.end
  ];

  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private authService: AuthService, private modalService: BsModalService, private router: Router) { 
    // const element = document.evaluate("//html/body/div/div[2]/div/owl-date-time-container/div[2]/div/div[1]/span/span[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
  }

  ngOnInit() { 
    if (window.history.state.filters && this.filters.start && this.filters.end){
      this.selectedMoments=[this.filters.start, this.filters.end]
      this.calculateReservedDays(this.selectedMoments)
    }
    if (this.car.reservations.length){
      this.reservationsToDates(this.car.reservations)
    }
    // console.log(this.disabledDays)
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => console.log(mutation));
    })
    let element = document.evaluate("//html/body/div/div[2]/div/owl-date-time-container/div[2]/div/div[1]/span/span[2]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    console.log(element)
    // this.changes.observe(element, {
    //   attributes: false,
    //   childList: false,
    //   characterData: true
    // });
  }

  private loggedIn() {
    return this.authService.loggedIn()
  }

  private calculateReservedDays(event){
    var Difference_In_Time = event[1].getTime() - event[0].getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1; 
    this.daysReserved = Difference_In_Days
    // console.log(event)
  }

  private printInfo(){
    console.log(this.selectedMoments)
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
        selectedMoments: this.selectedMoments
      } 
    })
  }

  private reservationsToDates(reservations){
    reservations.forEach((res: IReservation) => {
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

  print(){
    // let el = document.
    console.log(this.getElementByXpath("//html/body/div/div[2]/div/owl-date-time-container/div[2]/div/div[1]/span/span[2]"));
  }

  getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  chosenYearHandler( normalizedYear ) {
    let element = this.getElementByXpath("//html/body/div/div[2]/div/owl-date-time-container/div[2]/div/div[1]/span/span[2]")
    console.log(element)
}


}
