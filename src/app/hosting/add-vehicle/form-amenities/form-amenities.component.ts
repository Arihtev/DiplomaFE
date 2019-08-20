import { CarDatabaseService } from './../../../services/car-database/car-database.service';
import { IAmenities } from './../../../models/car database/amenities';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-amenities',
  templateUrl: './form-amenities.component.html',
  styleUrls: ['./form-amenities.component.scss']
})
export class FormAmenitiesComponent implements OnInit {

  amenitiesForm: FormGroup;
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  safety: IAmenities[] = [];
  comfort: IAmenities[] = [];
  others: IAmenities[] = [];

  constructor(private _formBuilder: FormBuilder, private service: CarDatabaseService) {}

  ngOnInit() {
    this.service.getAmenities().subscribe((res: IAmenities[]) =>{
      res.forEach(element => {
        if (element.category_id == 1){
          this.safety.push(element)
        }
        else if (element.category_id == 2){
          this.comfort.push(element)
        }
        else if (element.category_id == 3){
          this.others.push(element)
        }
      });
    })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.amenitiesForm = new FormGroup({
      safetyExtras: new FormControl([]),
      comfortExtras: new FormControl([]),
      otherExtras: new FormControl([])
    })
  }

  submit() {
    console.log(this.amenitiesForm.value)
  }
}
