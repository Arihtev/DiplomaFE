import { FormAmenitiesComponent } from './add-vehicle/form-amenities/form-amenities.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: AddVehicleComponent
  },
  {
    path:"test",
    component: FormAmenitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
