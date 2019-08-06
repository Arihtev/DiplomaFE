import { FormAmenitiesComponent } from './add-vehicle/form-amenities/form-amenities.component';
import { AddPlaceComponent } from './add-vehicle/add-place.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: AddPlaceComponent
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
