import { CarDatabaseService } from './../../../services/car-database/car-database.service';
import { carApi } from './../../../models/car database/car-database';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit {

  @Output() childMessage = new EventEmitter<FormGroup>();

  mainForm: FormGroup;

  cars: carApi[]

  constructor(private formBuilder: FormBuilder, private service: CarDatabaseService) { }

  printCars(){
    console.log(this.service.cars)
  }

  ngOnInit() {

    this.service.loadCars()

    this.mainForm = this.formBuilder.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      odometer: ['', Validators.required],
      transmission: ['', Validators.required],
      engine: ['', Validators.required]
    });
    this.mainForm.valueChanges.subscribe(res => {
      this.childMessage.emit(this.mainForm);
    })
  }
}
