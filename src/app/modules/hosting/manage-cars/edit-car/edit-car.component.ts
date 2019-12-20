import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from 'src/app/shared/models/site-db/cars';
import { ActivatedRoute } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  

  car: ICar

  constructor(private activatedRoute: ActivatedRoute, private carDbService: SiteCardbService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.carDbService.car_details(params.id).subscribe((res: ICar) => {
        this.car = res
      })
    })
  }

}
