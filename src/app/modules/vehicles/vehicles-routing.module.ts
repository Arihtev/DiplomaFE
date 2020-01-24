import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

const routes: Routes = [
  {
    path:"",
    component: CarsListComponent
  },
  {
    path:":id",
    component: CarDetailsComponent
  },
  {
    path:":id/reservation",
    component: ReservationFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
