import { ICar } from './../../models/site-db/cars';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteCardbService {

  CAR_DB_URL: string = 'http://127.0.0.1:8000'

  constructor(private service: HttpClient) { }

  get_all_cars(){
    return this.service.get(`${this.CAR_DB_URL}/cars/all/`)
  }

  car_details(id): Observable<ICar>{
    return this.service.get<ICar>(`${this.CAR_DB_URL}/cars/car-details/${id}`)
  }
}
