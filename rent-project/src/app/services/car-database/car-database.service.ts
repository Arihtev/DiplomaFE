import { carApiResponse, carApi } from './../../models/car database/car-database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarDatabaseService {
  
  cars: carApi[];

  constructor(private service: HttpClient) { }

  loadCars(){
    this.service.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000', {responseType: 'text'}).subscribe(res => {
      console.log(res)
      // this.cars = res.Makes
    })
  }
}
