import { ICar } from './../../models/site-db/cars';
import { SiteCardbService } from './../../services/site-cardb/site-cardb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars: ICar[] = []

  constructor(private service: SiteCardbService) { }

  ngOnInit() {
    this.service.get_all_cars().subscribe((res: ICar[]) => {
      this.cars = res
    },
    err => {
    })
  }

  print(){
    console.log(this.cars)
  }
}
