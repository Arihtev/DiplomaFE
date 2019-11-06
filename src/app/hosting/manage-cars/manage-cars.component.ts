import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/site-db/cars';
import { SiteCardbService } from 'src/app/services/site-cardb/site-cardb.service';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent implements OnInit {

  cars: ICar[] = []

  constructor(private service: SiteCardbService) { }

  ngOnInit() {
    this.service.get_all_cars().subscribe((res: ICar[]) => {
      this.cars = res
    },
    err => {
    })
  }

  print(car){
    console.log(car)
  }
}
