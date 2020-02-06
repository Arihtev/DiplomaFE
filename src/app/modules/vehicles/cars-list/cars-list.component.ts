import { map } from "rxjs/operators";
import {
  Router,
  ActivatedRoute,
  NavigationExtras,
  NavigationStart,
  NavigationEnd
} from "@angular/router";
import { ICar, IFilters } from "../../../shared/models/site-db/cars";
import { SiteCardbService } from "../../../core/services/site-cardb/site-cardb.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { SearchFiltersComponent } from "src/app/modules/home/homepage/search-form/search-filters/search-filters.component";
import { of } from "rxjs";
import * as moment from "moment";

@Component({
  selector: "app-cars-list",
  templateUrl: "./cars-list.component.html",
  styleUrls: ["./cars-list.component.scss"]
})
export class CarsListComponent implements OnInit {
  filters: any = { region: "", city: "", start: undefined, end: undefined };
  noCars: boolean = false;

  loading = false;

  cars: ICar[] = [];

  @ViewChild(SearchFiltersComponent, { static: true })
  searchFiltersComponent: SearchFiltersComponent;

  getFilters() {
    return this.searchFiltersComponent
      ? this.searchFiltersComponent.getForm()
      : null;
  }

  constructor(private service: SiteCardbService) {}

  ngOnInit() {
    if (window.history.state.example) {
      this.filters = window.history.state.example;
    }
    this.updateCars();
  }

  updateCars() {
    this.loading = true;
    this.service.get_all_cars(
      this.filters.start ? moment(this.filters.start).format("YYYY-MM-D"): undefined, 
      this.filters.end ? moment(this.filters.end).format("YYYY-MM-D"): undefined)
      .subscribe(
      (res: ICar[]) => {
        // console.log(res)
        this.cars = this.filterCarsList(res);
        this.loading = false;
      },
      err => {}
    );
  }

  filterCarsList(cars) {
    let filtered = cars;
    if (this.filters.region) {
      // console.log(this.filters.region.name)
      // console.log("Filter by region")
      filtered = filtered.filter(car => car.region == this.filters.region.name);
    }
    if (this.filters.city) {
      // console.log("Filter by city")
      filtered = filtered.filter(car => car.city == this.filters.city.name);
    }
    if (filtered.length == 0) {
      this.noCars = true;
    } else {
      this.noCars = false;
    }
    // filtered = filtered.filter(car => [15, 14, 9, 10].includes(car.id))
    //remove later
    // return filtered.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
    return filtered;
  }

  searchCars() {
    // console.log(this.getFilters())
    this.filters = this.getFilters();
    this.updateCars();
  }

  print() {
    console.log(this.filters);
  }
}
