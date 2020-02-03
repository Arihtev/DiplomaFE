import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:"favourites",
    component: FavouritesComponent
  },
  {
    path:"reservations",
    component: ReservationsComponent
  },
  {
    path:"settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
