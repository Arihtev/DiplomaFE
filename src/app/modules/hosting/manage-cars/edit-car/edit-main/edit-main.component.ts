import { ICar } from 'src/app/shared/models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Region, City } from 'src/app/shared/models/car database/city-database';
import { Observable } from 'rxjs';
import { REGIONS, CITIES } from 'src/app/core/services/car-database/cities';
import { startWith, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { CarDatabaseService } from 'src/app/core/services/car-database/car-database.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.scss']
})
export class EditMainComponent implements OnInit {

  @Input() car: ICar

  locationForm: FormGroup;
  rulesForm: FormGroup;
  // myControl = new FormControl();

  regions: Region[] = REGIONS;
  filteredRegions: Observable<Region[]>;

  cities: City[] = CITIES
  loadedCities: City[] = [];
  filteredCities: Observable<City[]>;
  
  booll: boolean = true;


  constructor(public carDbService: SiteCardbService, public router: Router, public _snackBar: MatSnackBar){ }

  ngOnInit() {
    this.locationForm = new FormGroup({
      region: new FormControl({name: this.car.region} , Validators.required),
      city: new FormControl({name: this.car.city}, Validators.required),
      address: new FormControl(this.car.address, Validators.required),
      zipCode: new FormControl(this.car.zip_code, Validators.required)
    })
    this.rulesForm = new FormGroup({
      pets: new FormControl(`${this.car.pets}`, Validators.required),
      smoking: new FormControl(`${this.car.smoking}`, Validators.required),
      includedKm: new FormControl(this.car.included_km, Validators.required),
      pricePerExtraKm: new FormControl(this.car.price_per_extra_km, Validators.required),
      price: new FormControl(this.car.price, Validators.required),
      weeklyDiscount: new FormControl(this.car.weekly_discount, Validators.required),
      monthlyDiscount: new FormControl(this.car.monthly_discount, Validators.required)
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
    console.log(this.rulesForm.value)
  }

  submitForm() {
    console.log("WASSUP")
    let city = this.locationForm.value.city.name;
    let region = this.locationForm.value.region.name;
    let address = this.locationForm.value.address;
    let zipCode = this.locationForm.value.zipCode;

    // let safety = this.formStepTwo.value.safetyExtras;
    // let comfort = this.formStepTwo.value.comfortExtras;
    // let others = this.formStepTwo.value.otherExtras;
    // let extras = safety.concat(comfort, others);

    let pets = this.rulesForm.value.pets;
    let smoking = this.rulesForm.value.smoking;
    let includedKm = this.rulesForm.value.includedKm;
    let pricePerExtraKm = this.rulesForm.value.pricePerExtraKm;
    let price = this.rulesForm.value.price;
    let weeklyDiscount = this.rulesForm.value.weeklyDiscount;
    let monthlyDiscount = this.rulesForm.value.monthlyDiscount;

    // console.log(this.car.id, region, city, address, zipCode, extras, pets, smoking,
    //     includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount)
    this.carDbService.updateMainCar(this.car.id, region, city, address, zipCode, pets, smoking,
      includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount)
      .subscribe(res => {
        this.openSnackBar("Вашият автомобил беше запазен успешно!", "Затвори");
        this.router.navigate(["/host/manage-cars"]);
      });
  }
  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 6000,
      panelClass: ["registration-snackbar"],
      verticalPosition: "top"
    });
    // snackBarRef.onAction().subscribe(() => this.openLoginModal());
  }
}
