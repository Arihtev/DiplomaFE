import { Component, OnInit } from "@angular/core";
import { ICar } from "src/app/shared/models/site-db/cars";
import { SiteCardbService } from "src/app/core/services/site-cardb/site-cardb.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { CustomHttpService } from "src/app/core/services/custom-http/custom-http.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  cars: ICar[] = [];

  constructor(
    private dbService: SiteCardbService,
    private customHttp: CustomHttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.refreshCars();
  }

  refreshCars() {
    this.dbService.getFavourites().subscribe((res: ICar[]) => {
      // console.log(res)
      this.cars = res;
    });
  }

  redirectToAll(){
    this.router.navigate(['/cars'])
  }
}
