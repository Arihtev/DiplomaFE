import { ICar } from 'src/app/shared/models/site-db/cars';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAmenities } from 'src/app/shared/models/car database/amenities';
import { CarDatabaseService } from 'src/app/core/services/car-database/car-database.service';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  constructor(private _formBuilder: FormBuilder, private service: CarDatabaseService, public carDbService: SiteCardbService, public router: Router, public _snackBar: MatSnackBar) {}

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

  submitForm(){
      let safety = this.amenitiesForm.value.safetyExtras;
    let comfort = this.amenitiesForm.value.comfortExtras;
    let others = this.amenitiesForm.value.otherExtras;
    let extras = safety.concat(comfort, others);
    this.carDbService.updateCarExtras(this.car.id, extras)
      .subscribe(res => {
        this.openSnackBar("Вашият автомобил беше запазен успешно!", "Затвори");
        this.router.navigate(["/host/manage-cars"]);
      });
  }
  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 6000,
      panelClass: ["registration-snackbar"],
      verticalPosition: "top"
    });
    // snackBarRef.onAction().subscribe(() => this.openLoginModal());
  }
}
