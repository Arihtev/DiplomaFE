import { ICar } from '../../../shared/models/site-db/cars';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class SiteCardbService {

  CAR_DB_URL: string = 'http://127.0.0.1:8000'
  // 'http://10.10.63.248'

  constructor(private service: HttpClient, private customService: CustomHttpService) { }

  get_all_cars(){
    return this.customService.get(`${this.CAR_DB_URL}/cars/all/`)
  }

  car_details(id){
    return this.customService.get(`${this.CAR_DB_URL}/cars/car-details/${id}`)
  }

  addToFavourites(carId){
    return this.service.post(`${this.CAR_DB_URL}/users/add-favourite/`, {id: carId})
  }

  getFavourites(){
    return this.customService.get(`${this.CAR_DB_URL}/users/favourites/`)
  }
}
