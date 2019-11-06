import { ICar } from './../../../models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-reservation-tab',
  templateUrl: './car-reservation-tab.component.html',
  styleUrls: ['./car-reservation-tab.component.scss']
})
export class CarReservationTabComponent implements OnInit {

  @Input() car: ICar

  min = new Date()
  daysReserved: number = 0

  today = new Date();
  start = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(), this.today.getHours()+1)
  end = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+1, this.today.getHours()+1)

  public selectedMoments = [
    this.start,
    this.end
  ];

  public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() { }

  ngOnInit() { 
    this.calculateReservedDays(this.selectedMoments)
  }

  calculateReservedDays(event){
    var Difference_In_Time = event[1].getTime() - event[0].getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    this.daysReserved = Difference_In_Days
    // console.log(event)
  }

  printInfo(){
    console.log(this.selectedMoments)
  }

}
