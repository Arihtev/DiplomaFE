import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Region, City } from 'src/app/shared/models/car database/city-database';
import { Observable } from 'rxjs';
import { REGIONS, CITIES } from 'src/app/core/services/car-database/cities';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {

  @Input() filters: any;
  
  locationForm: FormGroup;

  regions: Region[] = REGIONS;
  filteredRegions: Observable<Region[]>;

  cities: City[] = CITIES
  loadedCities: City[] = [];
  filteredCities: Observable<City[]>;

  min = new Date()

  today = new Date();
  startAt = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), this.today.getHours() + 1);
  start = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), this.today.getHours() + 1)
  end = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1, this.today.getHours() + 1)

  public selectedMoments = [
    // this.start,
    // this.end
  ];

  public datesFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor() {
    this.locationForm = new FormGroup({
      region: new FormControl(''),
      city: new FormControl(''),
    })
    this.loadedCities = CITIES
  }

  ngOnInit() {
    if (this.filters){
      this.setFilterValues()
    }
    if (this.locationForm.value['region'] == "") {
      this.filteredCities = this.locationForm.controls['city'].valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.cityFilter(name) : this.loadedCities.slice())
      )
    }
    this.filteredRegions = this.locationForm.controls['region'].valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.regionFilter(name) : this.regions.slice())
    )
    this.locationForm.controls['region'].valueChanges.subscribe(res => {
      if (res === "") {
        this.loadedCities = CITIES
      }
      if (typeof res === 'string') {
        // console.log(res)
        this.regions.forEach(region => {
          if (region.name.toLowerCase() === res) {
            this.loadCities(res)
          }
          else {
            this.locationForm.controls['city'].setValue('')
          }
        });
      }
      else {
        // console.log("object")
        this.locationForm.controls['city'].setValue('')
        this.loadCities(res.name)
      }
      this.filteredCities = this.locationForm.controls['city'].valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.cityFilter(name) : this.loadedCities.slice())
      )
    })

    this.locationForm.controls['city'].valueChanges.subscribe(res => {
      if (typeof res === 'string') {
        // console.log("string")
        let isCity: boolean;
        let foundCity: City;
        this.loadedCities.forEach(city => {
          if (city.name.toLowerCase() === res.toLowerCase()) {
            isCity = true;
            foundCity = city;
          }
          else {
            // console.log("false")
            // this.locationForm.controls['city'].setValue('')
          }
        });
        if (isCity) {
          // console.log(foundCity)
        }
        else {
          // console.log("false")
        }
      }
    })
  }

  displayFn(region?: Region): string | undefined {
    return region ? region.name : undefined;
  }

  private cityFilter(name: string): City[] {
    let filterValue = name.toLowerCase();
    return this.loadedCities.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private regionFilter(name: string): Region[] {
    let filterValue = name.toLowerCase();
    return this.regions.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private loadCities(name: string) {
    let filterValue = name.toLowerCase()
    this.loadedCities = this.cities.filter(city => city.region.toLowerCase().indexOf(filterValue) === 0)
  }

  getForm() {
    let region = this.locationForm.value['region']
    let city = this.locationForm.value['city']
    let start = this.selectedMoments[0]
    let end = this.selectedMoments[1]

    let form = {region: region, city: city, start: start, end: end}
    // console.log(form)
    return form
  }

  setFilterValues(){
    this.locationForm.controls['region'].setValue(this.filters.region)
    this.locationForm.controls['city'].setValue(this.filters.city)
    this.selectedMoments[0] = this.filters.start
    this.selectedMoments[1] = this.filters.end
  }

  showFilters(){
    console.log(this.filters)
  }

}