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

  get frmStepOne() {
    return this.formMainComponent ? this.formMainComponent.mainForm : null;
 }
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['']
    });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

//   showMessageFromChild(message: FormGroup) {
//     this.messageFromChild = message;
//  }

  submit(){
    // console.log(this.firstFormGroup.value)
    console.log(this.frmStepOne.value)
  }
}