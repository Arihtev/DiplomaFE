import { ICar } from './../../../models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cars-list-item',
  templateUrl: './cars-list-item.component.html',
  styleUrls: ['./cars-list-item.component.scss']
})
export class CarsListItemComponent implements OnInit {

  @Input() car: ICar;

  rate: number = 3.6;

  constructor() { }

  ngOnInit() {
  }

}
