import { CarDatabaseService } from '../../../../core/services/car-database/car-database.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IYear, IMake, IModel, IcarApiMakesResponse, IcarApiModelsResponse, IEngine } from 'src/app/shared/models/car database/car-database';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit {

  mainForm: FormGroup;

  // years: Observable<IYear[]>;
  years: number[] = [];
  makes: IMake[] //= [{make_id:"audi", make_display:"Audi", make_is_common:"1", make_country:"Germany"}];
  models: IModel[] //= [{model_name:"RS6",model_make_id:"audi"}];
  // engines: IEngine[] = [{id: "1", type: "Petrol"}, {id: "2", type: "Diesel"}, {id: "3", type: "Electric"}, {id: "4", type: "Hybrid"}]
  
  //Selects diability
  // makeSelect: boolean = true;
  // modelSelect: boolean = true;

  constructor(private formBuilder: FormBuilder, private service: CarDatabaseService) { 
    for(let i: number = new Date().getFullYear(); i >= 1960; i--){
      this.years.push(i)
    }
    this.mainForm = new FormGroup({
      year: new FormControl('', Validators.required),
      make: new FormControl({value:'', disabled: true}, Validators.required),
      model: new FormControl({value:'', disabled: true}, Validators.required),
      transmission: new FormControl('', Validators.required),
      engine: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      horsepower: new FormControl('', Validators.required),
      consumption: new FormControl('', Validators.required),
      seats: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    // this.mainForm.controls['year'].setValue(2020)
    // this.mainForm.controls['make'].setValue(this.makes[0])
    // this.mainForm.controls['model'].setValue(this.models[0])
    this.mainForm.controls['year'].valueChanges.subscribe(res => {
      // console.log(res)
      this.models = []
      // this.mainForm.controls['make'].setValue("")
      this.service.getMakes(res).subscribe(res => {
        let newres: IcarApiMakesResponse = JSON.parse(res.slice(2, -2))
        // console.log(newres.Makes)
        this.makes = newres.Makes
        this.mainForm.controls['make'].enable()
      })
    })

    //On make change get models
    this.mainForm.get('make').valueChanges.subscribe(response => {
      // console.log(res.make_id)
      let year = this.mainForm.value.year
      this.service.getModels(response.make_id, year).subscribe(res => {
        let newres: IcarApiModelsResponse = JSON.parse(res.slice(2, -2))
        // console.log(newres.Makes)
        this.models = newres.Models
        if (response.make_id){
          this.mainForm.controls['model'].enable()
        }
        else{
          this.mainForm.controls['model'].disable()
        }
      })
      // this.models = this.service.getModels(res.make_id, year)
    })
  }

  printCars(){
    console.log(this.mainForm)
  }
}
