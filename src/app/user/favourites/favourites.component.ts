import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/site-db/cars';
import { SiteCardbService } from 'src/app/services/site-cardb/site-cardb.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  cars: ICar[] = []

  constructor(private dbService: SiteCardbService) { }

  ngOnInit() {
    this.refreshCars()
  }

  refreshCars(){
    this.dbService.getFavourites().subscribe((res: ICar[]) => {
      console.log(res)
      this.cars = res
    })
  }

}
