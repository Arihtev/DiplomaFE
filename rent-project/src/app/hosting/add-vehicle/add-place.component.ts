import { Component, OnInit } from '@angular/core';
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
  messageFromChild: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['']
    });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  showMessageFromChild(message: FormGroup) {
    this.messageFromChild = message;
 }

  submit(){
    console.log(this.firstFormGroup.value)
    console.log(this.messageFromChild.value)
  }
}