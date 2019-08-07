import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { REGIONS } from 'src/app/services/car-database/cities';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrls: ['./form-location.component.scss']
})
export class FormLocationComponent implements OnInit {

  locationForm: FormGroup;
  myControl = new FormControl();
  options: string[] = ['Едно', 'Две', 'Три'];
  filteredOptions: Observable<string[]>;

  constructor(){
    this.locationForm = new FormGroup({
      region: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    this.filteredOptions = this.locationForm.controls['region'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
//   locationForm: FormGroup;
//   regions: any = [{"name": "London"},{"name": "Sofia"},{"name": "Burgas"}];

//   constructor() { 
//     this.locationForm = new FormGroup({
//       region: new FormControl('', Validators.required)
//     })
//   }

//   ngOnInit() {
//   }

// }
