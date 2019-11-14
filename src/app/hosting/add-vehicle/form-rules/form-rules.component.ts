import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-rules',
  templateUrl: './form-rules.component.html',
  styleUrls: ['./form-rules.component.scss']
})
export class FormRulesComponent implements OnInit {

  rulesForm: FormGroup

  constructor() { 
    this.rulesForm = new FormGroup({
      pets: new FormControl('false', Validators.required),
      smoking: new FormControl('false', Validators.required),
      includedKm: new FormControl('', Validators.required),
      pricePerExtraKm: new FormControl('', Validators.required),
      minRent: new FormControl('', Validators.required),
      maxRent: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      weeklyDiscount: new FormControl('', Validators.required),
      monthlyDiscount: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  print(){
    console.log(this.rulesForm.value)
  }

}
