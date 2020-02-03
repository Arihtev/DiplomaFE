import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { EditCarComponent } from './manage-cars/edit-car/edit-car.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"add-new",
    component: AddVehicleComponent
  },
  {
    path:"manage-cars",
    component: ManageCarsComponent
  },
  {
    path:"manage-cars/:id",
    component: EditCarComponent
  },
  {
    path:"manage-reservations/:id",
    component: ManageReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
