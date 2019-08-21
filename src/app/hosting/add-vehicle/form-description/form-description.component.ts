import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-description',
  templateUrl: './form-description.component.html',
  styleUrls: ['./form-description.component.scss']
})
export class FormDescriptionComponent implements OnInit {

  descriptionForm: FormGroup;
  image_files: any[]

  constructor() { }

  ngOnInit() {
    this.descriptionForm = new FormGroup({
      pictures: new FormControl([])
    })
  }

  show(){
    console.log(this.descriptionForm.value)
  }

  receiveImages($event) {
    this.descriptionForm.controls['pictures'].setValue($event)
  }

}
