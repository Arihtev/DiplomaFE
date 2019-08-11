import { IcarApiYearsResponse, IYear, IMake, IcarApiMakesResponse, IModel, IcarApiModelsResponse } from './../../models/car database/car-database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { format } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CarDatabaseService {

  CAR_API_URL: string = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd='
  API_KEY: string = '&api_key=Your_Database_Api_Key'

  years: IYear[];

  constructor(private service: HttpClient) { }

  getMakes(year){
    return this.service.get(`${this.CAR_API_URL}getMakes&year=${year}`, {responseType: 'text'})
  }

  getModels(make_id, year){
    return this.service.get(`${this.CAR_API_URL}getModels&make=${make_id}&year=${year}`, {responseType: 'text', }, )
  }

  getYears(): Observable<IYear[]>{
    return this.service.get<IcarApiYearsResponse>(`https://databases.one/api/?format=json&select=year${this.API_KEY}`).pipe(
      map((response: {result: IYear[] }) => {
        return response.result.reverse();
      })
    )
  }

}
