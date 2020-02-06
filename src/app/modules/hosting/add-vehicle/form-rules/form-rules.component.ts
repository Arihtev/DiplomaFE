import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-rules',
  templateUrl: './form-rules.component.html',
  styleUrls: ['./form-rules.component.scss']
})
export class FormRulesComponent implements OnInit {

  @Output() submit: EventEmitter<any> = new EventEmitter();

  rulesForm: FormGroup;
  agreed: boolean = false;

  constructor() { 
    this.rulesForm = new FormGroup({
      pets: new FormControl('false', Validators.required),
      smoking: new FormControl('false', Validators.required),
      includedKm: new FormControl('', Validators.required),
      pricePerExtraKm: new FormControl('', Validators.required),
      // minRent: new FormControl('', Validators.required),
      // maxRent: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      weeklyDiscount: new FormControl('', Validators.required),
      monthlyDiscount: new FormControl('', Validators.required),
      agreed: new FormControl(false)
    })
  }

  ngOnInit() {
  }

  submitForm(){
    this.submit.emit()
  }
  print(){
    console.log(this.rulesForm.invalid)
  }

}
