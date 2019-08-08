import { FormLocationComponent } from './form-location/form-location.component';
import { FormMainComponent } from './form-main/form-main.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {
  firstFormGroup: FormGroup;
  form: FormGroup;
  isEditable = false;
  // messageFromChild: FormGroup;

  @ViewChild(FormMainComponent, {static: true}) formMainComponent: FormMainComponent;
  @ViewChild(FormLocationComponent, {static: true}) formLocationComponent: FormLocationComponent;

  get formStepOne() {
    return this.formMainComponent ? this.formMainComponent.mainForm : null;
  }

  get formStepTwo() {
    return this.formLocationComponent ? this.formLocationComponent.locationForm : null;
  }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

//   showMessageFromChild(message: FormGroup) {
//     this.messageFromChild = message;
//  }

  submit(){
    // console.log(this.firstFormGroup.value)
    console.log(this.formStepOne.value)
  }
}