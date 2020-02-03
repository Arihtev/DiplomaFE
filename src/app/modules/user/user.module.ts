import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { FavouritesComponent } from "./favourites/favourites.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VehiclesModule } from "../vehicles/vehicles.module";
import { ReservationsComponent } from "./reservations/reservations.component";
import { ReservationItemComponent } from "./reservations/reservation-item/reservation-item.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MomentModule } from "ngx-moment";
import { CancelResComponent } from "./reservations/cancel-res/cancel-res.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { CreateReviewComponent } from "./reservations/create-review/create-review.component";
import { MatInputModule, MatIconModule } from '@angular/material';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    FavouritesComponent,
    ReservationsComponent,
    ReservationItemComponent,
    CancelResComponent,
    CreateReviewComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    VehiclesModule,
    SharedModule,
    MomentModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [CancelResComponent, CreateReviewComponent]
})
export class UserModule {}
