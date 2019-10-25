import { Observable } from 'rxjs';
import { SiteCardbService } from './../../services/site-cardb/site-cardb.service';
import { ICar } from './../../models/site-db/cars';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  currentRate = 3.14;

  car: Observable<ICar>  

  constructor(private activatedRoute: ActivatedRoute, private carDbService: SiteCardbService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.car = this.carDbService.car_details(params.id)
    })
  }

  print(){
    console.log(this.car)
  }

}
