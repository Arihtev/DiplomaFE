import { FormDescriptionComponent } from './form-description/form-description.component';
import { CarDatabaseService } from '../../../core/services/car-database/car-database.service';
import { FormAmenitiesComponent } from './form-amenities/form-amenities.component';
import { FormLocationComponent } from './form-location/form-location.component';
import { FormMainComponent } from './form-main/form-main.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageUploadComponent } from './form-description/image-upload/image-upload.component';
import { FormRulesComponent } from './form-rules/form-rules.component';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  firstFormGroup: FormGroup;
  form: FormGroup;
  isEditable = false;
  message:any[];
  // messageFromChild: FormGroup;

  @ViewChild(FormMainComponent, {static: true}) formMainComponent: FormMainComponent;
  @ViewChild(FormLocationComponent, {static: true}) formLocationComponent: FormLocationComponent;
  @ViewChild(FormAmenitiesComponent, {static: true}) formAmenitiesComponent: FormAmenitiesComponent;
  @ViewChild(FormDescriptionComponent, {static: true}) formDescriptionComponent: FormDescriptionComponent;
  @ViewChild(FormRulesComponent, {static: true}) formRulesComponent: FormRulesComponent;

  get formStepOne() {
    return this.formMainComponent ? this.formMainComponent.mainForm : null;
  }

  get formStepTwo() {
    return this.formLocationComponent ? this.formLocationComponent.locationForm : null;
  }

  get formStepThree() {
    return this.formDescriptionComponent ? this.formDescriptionComponent.descriptionForm : null;
  }

  get formStepFour() {
    return this.formAmenitiesComponent ? this.formAmenitiesComponent.amenitiesForm : null;
  }

  get formStepFive() {
    return this.formRulesComponent ? this.formRulesComponent.rulesForm : null;
  }

  
  constructor(private service: CarDatabaseService) {}

  ngOnInit() {
  }

  show() {
    console.log(this.formStepThree.value)
  }

  submit(){
    let year = this.formStepOne.value.year
    let make = this.formStepOne.value.make.make_display
    let model = this.formStepOne.value.model.model_name
    let engine = this.formStepOne.value.engine
    let transmission = this.formStepOne.value.transmission
    let type = this.formStepOne.value.type
    let horsepower = this.formStepOne.value.horsepower
    let consumption = this.formStepOne.value.consumption
    let seats = this.formStepOne.value.seats

    let city = this.formStepTwo.value.city.name
    let region = this.formStepTwo.value.region.name
    let address = this.formStepTwo.value.address
    let zipCode = this.formStepTwo.value.zipCode
    let form1 = `${city}, ${region}, ${address}, ${zipCode}`

    let safety = this.formStepFour.value.safetyExtras
    let comfort = this.formStepFour.value.comfortExtras
    let others = this.formStepFour.value.otherExtras
    let extras = safety.concat(comfort, others)

    let pets = this.formStepFive.value.pets
    let smoking = this.formStepFive.value.smoking
    let includedKm = this.formStepFive.value.includedKm
    let pricePerExtraKm = this.formStepFive.value.pricePerExtraKm
    // let minRent = this.formStepFive.value.minRent
    // let maxRent = this.formStepFive.value.maxRent
    let price = this.formStepFive.value.price
    let weeklyDiscount = this.formStepFive.value.weeklyDiscount
    let monthlyDiscount = this.formStepFive.value.monthlyDiscount
    
    let pictures = this.formStepThree.value.pictures

    // console.log(year, make, model, transmission, engine, type, region, city, address, zipCode, extras, pictures)
    this.service.createCar(year, make, model, transmission, engine, horsepower, consumption, seats, type, region, city, address, zipCode, extras, pictures,
      pets, smoking, includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount).subscribe(res => {
      console.log(res)
    })
  }
}