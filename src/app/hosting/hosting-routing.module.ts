import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { FormAmenitiesComponent } from './add-vehicle/form-amenities/form-amenities.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
