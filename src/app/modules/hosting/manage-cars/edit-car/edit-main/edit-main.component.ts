import { ICar } from 'src/app/shared/models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Region, City } from 'src/app/shared/models/car database/city-database';
import { Observable } from 'rxjs';
import { REGIONS, CITIES } from 'src/app/core/services/car-database/cities';
import { startWith, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  @Input() car: ICar

  locationForm: FormGroup;
  // myControl = new FormControl();

  regions: Region[] = REGIONS;
  filteredRegions: Observable<Region[]>;

  cities: City[] = CITIES
  loadedCities: City[] = [];
  filteredCities: Observable<City[]>;
  
  booll: boolean = true;


  constructor(){ }

  ngOnInit() {
    this.locationForm = new FormGroup({
      region: new FormControl({name: this.car.region} , Validators.required),
      city: new FormControl({name: this.car.city}, Validators.required),
      address: new FormControl(this.car.address, Validators.required),
      zipCode: new FormControl(this.car.zip_code, Validators.required)
    })

    this.filteredRegions = this.locationForm.controls['region'].valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.regionFilter(name) : this.regions.slice())
    )

    this.locationForm.controls['region'].valueChanges.subscribe(res => {
      if (typeof res==='string'){
        console.log("string")
        this.regions.forEach(region => {
          if (region.name.toLowerCase() === res){
            this.loadCities(res)
          }
          else{
            this.locationForm.controls['city'].setValue('')
          }
        });
      }
      else{
        console.log("object")
        this.loadCities(res.name)
      }
      this.filteredCities = this.locationForm.controls['city'].valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.cityFilter(name) : this.loadedCities.slice())
      )
    })

    this.locationForm.controls['city'].valueChanges.subscribe(res => {
      if (typeof res==='string'){
        // console.log("string")
        let isCity:boolean;
        let foundCity: City;
        this.loadedCities.forEach(city => {
          if (city.name.toLowerCase() === res.toLowerCase()){
            isCity = true;
            foundCity = city;
          }
          else{
            // console.log("false")
            // this.locationForm.controls['city'].setValue('')
          }
        });
        if (isCity){
          console.log(foundCity)
        }
        else{
          console.log("false")
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

  print(){
    console.log(this.car)
  }
}
