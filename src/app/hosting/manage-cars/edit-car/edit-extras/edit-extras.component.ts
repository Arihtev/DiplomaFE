import { ICar } from 'src/app/models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAmenities } from 'src/app/models/car database/amenities';
import { CarDatabaseService } from 'src/app/services/car-database/car-database.service';

@Component({
  selector: 'app-edit-extras',
  templateUrl: './edit-extras.component.html',
  styleUrls: ['./edit-extras.component.scss']
})
export class EditExtrasComponent implements OnInit {

  @Input() car: ICar
  
  amenitiesForm: FormGroup;

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
    this.amenitiesForm = new FormGroup({
      safetyExtras: new FormControl([]),
      comfortExtras: new FormControl([]),
      otherExtras: new FormControl([])
    })
    this.populateExtras();

  }

  populateExtras(){
    let safetyCurrent = []
    let comfortCurrent = []
    let otherCurrent = []
    this.car.extras.forEach(element => {
      if (element.category_id == 1){
        safetyCurrent.push(element.id)
      }
      else if (element.category_id == 2){
        comfortCurrent.push(element.id)
      }
      else if (element.category_id == 3){
        otherCurrent.push(element.id)
      }
    });
    this.amenitiesForm.controls['safetyExtras'].setValue(safetyCurrent)
    this.amenitiesForm.controls['comfortExtras'].setValue(comfortCurrent)
    this.amenitiesForm.controls['otherExtras'].setValue(otherCurrent)
  }

  printInfo(){
    console.log(this.car)
  }
}
