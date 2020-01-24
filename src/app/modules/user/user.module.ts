import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { ReservationsComponent } from './reservations/reservations.component';

@NgModule({
  declarations: [
    FavouritesComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    VehiclesModule
  ]
})
export class UserModule { }