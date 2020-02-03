import { IcarApiYearsResponse, IYear, IMake, IcarApiMakesResponse, IModel, IcarApiModelsResponse } from '../../../shared/models/car database/car-database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, zip } from 'rxjs';
import { format } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CarDatabaseService {
  
  CAR_DB_URL: string = 'http://127.0.0.1:8000'
  // 'http://10.10.63.248'

  CAR_API_URL: string = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd='
  API_KEY: string = '&api_key=Your_Database_Api_Key'

  // years: IYear[];

  constructor(private service: HttpClient) { }

  getMakes(year){
    return this.service.get(`${this.CAR_API_URL}getMakes&year=${year}`, {responseType: 'text'})
  }

  getModels(make_id, year){
    return this.service.get(`${this.CAR_API_URL}getModels&make=${make_id}&year=${year}`, {responseType: 'text', }, )
  }

  getAmenities() {
    return this.service.get(`${this.CAR_DB_URL}/cars/extras/`)
  }
  
  // createCar(year, make, extras, pictures) {
  createCar(year, make, model, transmission, engine_type, horsepower, consumption, seats, category, region, city, address, zip_code, extras, pictures,
            pets, smoking, includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount) {
    return this.service.post(`${this.CAR_DB_URL}/cars/create/`, {
      year: year,
      make: make,
      model: model,
      transmission: transmission,
      engine_type: engine_type,
      horsepower: horsepower,
      consumption: consumption,
      seats: seats,
      category: category,
      region: region,
      city: city,
      address: address,
      zip_code: zip_code,
      pictures: pictures,
      extras: extras,
      pets: pets, 
      smoking: smoking, 
      included_km: includedKm, 
      price_per_extra_km: pricePerExtraKm,
      price: price, 
      weekly_discount: weeklyDiscount, 
      monthly_discount: monthlyDiscount
    })
  }
}
