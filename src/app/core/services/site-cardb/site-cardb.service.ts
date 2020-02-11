import { ICar } from '../../../shared/models/site-db/cars';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class SiteCardbService {

  CAR_DB_URL: string = 'http://127.0.0.1:8000'
  // 'http://10.10.63.248'

  constructor(private service: HttpClient, private customService: CustomHttpService) { }

  get_all_cars(start?, end?){
    let params = start && end ? new HttpParams().set("start_date",start).set("end_date", end) : null;
    return this.customService.get(`${this.CAR_DB_URL}/cars/all/`, params ? params : null)
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

  sendReservation(reservationData){
    return this.customService.post(`${this.CAR_DB_URL}/reservations/all/`, {
      car_id: reservationData.carId,
      renter_id: reservationData.renterId,
      start_date: reservationData.startDate,
      end_date: reservationData.endDate,
      days_reserved: reservationData.daysReserved,
      total_price: reservationData.totalPrice,
      status: 'paid'
    })
  }

  getUserReservations(){
    return this.customService.get(`${this.CAR_DB_URL}/reservations/user/`)
  }

  getCarReservations(id){
    return this.customService.get(`${this.CAR_DB_URL}/reservations/car/${id}`)
  }

  cancelReservation(id, reservationStatus, priceAfter){
    return this.customService.patch(`${this.CAR_DB_URL}/reservations/cancel/${id}`, {
      status: reservationStatus,
      total_price: priceAfter
    })
  }

  submitReview(reservation_id, car_id, rate, comment){
    return this.customService.post(`${this.CAR_DB_URL}/reservations/create-review/`, {
      reservation: reservation_id,
      car_id: car_id,
      comment: comment,
      rate: rate,
      date: new Date()
    })
  }

  updateProfile(id, photo){
    return this.customService.patch(`${this.CAR_DB_URL}/users/user/${id}`, {
      photo
    })
  }

  updateCar(id, region, city, address, zip_code, extras, pets, smoking, includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount) {
    return this.service.post(`${this.CAR_DB_URL}/cars/update/${id}`, {
    region: region,
    city: city,
    address: address,
    zip_code: zip_code,
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
  updateMainCar(id, region, city, address, zip_code, pets, smoking, includedKm, pricePerExtraKm, price, weeklyDiscount, monthlyDiscount) {
    return this.service.patch(`${this.CAR_DB_URL}/cars/update/${id}`, {
    region: region,
    city: city,
    address: address,
    zip_code: zip_code,
    pets: pets, 
    smoking: smoking, 
    included_km: includedKm, 
    price_per_extra_km: pricePerExtraKm,
    price: price, 
    weekly_discount: weeklyDiscount, 
    monthly_discount: monthlyDiscount
    })
  }

  updateCarExtras(id, extras){
    return this.service.patch(`${this.CAR_DB_URL}/cars/update/${id}`, {
      extras
    })
  }
}
