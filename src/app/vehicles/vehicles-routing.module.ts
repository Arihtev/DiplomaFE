import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: CarsListComponent
  },
  {
    path:":id",
    component: CarDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
