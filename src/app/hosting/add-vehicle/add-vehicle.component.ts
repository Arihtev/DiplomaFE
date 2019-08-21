import { FormDescriptionComponent } from './form-description/form-description.component';
import { CarDatabaseService } from './../../services/car-database/car-database.service';
import { FormAmenitiesComponent } from './form-amenities/form-amenities.component';
import { FormLocationComponent } from './form-location/form-location.component';
import { FormMainComponent } from './form-main/form-main.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageUploadComponent } from './form-description/image-upload/image-upload.component';

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

  
  constructor(private service: CarDatabaseService) {}

  ngOnInit() {
  }

  show() {
    console.log(this.formStepThree.value)
  }

  submit(){
    let year = this.formStepOne.value.year.year
    let make = this.formStepOne.value.make.make_display
    let model = this.formStepOne.value.model.model_name
    let engine = this.formStepOne.value.engine
    let transmission = this.formStepOne.value.transmission
    let type = this.formStepOne.value.type

    let city = this.formStepTwo.value.city.name
    let region = this.formStepTwo.value.region.name
    let address = this.formStepTwo.value.address
    let zipCode = this.formStepTwo.value.zipCode
    let form1 = `${city}, ${region}, ${address}, ${zipCode}`

    let safety = this.formStepFour.value.safetyExtras
    let comfort = this.formStepFour.value.comfortExtras
    let others = this.formStepFour.value.otherExtras
    let extras = safety.concat(comfort, others)
    
    let pictures = this.formStepThree.value.pictures

    this.service.createCar(year, make, model, transmission, engine, type, region, city, address, zipCode, extras, pictures).subscribe(res => {
      console.log(res)
    })
  }
}