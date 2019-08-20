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
  // messageFromChild: FormGroup;

  @ViewChild(FormMainComponent, {static: true}) formMainComponent: FormMainComponent;
  @ViewChild(FormLocationComponent, {static: true}) formLocationComponent: FormLocationComponent;
  @ViewChild(FormAmenitiesComponent, {static: true}) formAmenitiesComponent: FormAmenitiesComponent;
  @ViewChild(ImageUploadComponent, {static: true}) imageUploadComponent: ImageUploadComponent;

  get formStepOne() {
    return this.formMainComponent ? this.formMainComponent.mainForm : null;
  }

  get formStepTwo() {
    return this.formLocationComponent ? this.formLocationComponent.locationForm : null;
  }

  get formStepFour() {
    return this.formAmenitiesComponent ? this.formAmenitiesComponent.amenitiesForm : null;
  }

  get formImages() {
    return this.imageUploadComponent ? this.imageUploadComponent.files : null;
  }
  
  constructor(private service: CarDatabaseService) {}

  ngOnInit() {
  }

//   showMessageFromChild(message: FormGroup) {
//     this.messageFromChild = message;
//  }

  submit(){
    // let year = this.formStepOne.value.year.year
    // let make = this.formStepOne.value.make.make_display
    // let model = this.formStepOne.value.model.model_name
    // let engine = this.formStepOne.value.engine
    // let transmission = this.formStepOne.value.transmission
    // let type = this.formStepOne.value.type
    // // let form1 = `${year}, ${make}, ${model}, ${engine}, ${transmission}, ${type}`
    // // console.log(this.formStepOne.value)

    // let city = this.formStepTwo.value.city.name
    // let region = this.formStepTwo.value.region.name
    // let address = this.formStepTwo.value.address
    // let zipCode = this.formStepTwo.value.zipCode
    // let form1 = `${city}, ${region}, ${address}, ${zipCode}`

    // let safety = this.formStepFour.value.safetyExtras
    // let comfort = this.formStepFour.value.comfortExtras
    // let others = this.formStepFour.value.otherExtras
    // let form4 = safety.concat(comfort, others)
    // form4arr.push(safety, comfort, others)
    // console.log(form1)
    // console.log(form4)
    console.log(this.formImages)
    // this.service.createCar(year, make, model, transmission, engine, type, region, city, address, zipCode, form4).subscribe(res => {
    //   console.log(res)
    // })
  }
}