import { Component, OnInit, Input } from '@angular/core';
import { ICar } from 'src/app/models/site-db/cars';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-secondary',
  templateUrl: './edit-secondary.component.html',
  styleUrls: ['./edit-secondary.component.scss']
})
export class EditSecondaryComponent implements OnInit {

  @Input() car: ICar

  descriptionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.descriptionForm = new FormGroup({
      pictures: new FormControl([])
    })
  }

  receiveImages($event) {
    this.descriptionForm.controls['pictures'].setValue($event)
  }

  printInfo(){
    console.log(this.descriptionForm.value)
  }

}
