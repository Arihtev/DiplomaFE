import { HomeModule } from "../home/home.module";
import { SearchFiltersComponent } from "../home/homepage/search-form/search-filters/search-filters.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VehiclesRoutingModule } from "./vehicles-routing.module";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsListItemComponent } from "./cars-list/cars-list-item/cars-list-item.component";
import { RatingModule } from "ngx-bootstrap/rating";
import { ConvertCategoryPipe } from "../../shared/pipes/convert-category.pipe";
import { CarDetailsComponent } from "./car-details/car-details.component";
import {
  CarouselModule,
  WavesModule,
  ButtonsModule
} from "angular-bootstrap-md";
import { NgxGalleryModule } from "ngx-gallery";
import { CarCarouselComponent } from "./car-details/car-carousel/car-carousel.component";
import { ShowRatingComponent } from "../../shared/components/show-rating/show-rating.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarReservationTabComponent } from "./car-details/car-reservation-tab/car-reservation-tab.component";
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OwlDateTimeIntl,
  OWL_DATE_TIME_FORMATS
} from "ng-pick-datetime";
import {
  DefaultIntl,
  MY_MOMENT_FORMATS
} from "../../shared/pipes/custom-date-time-adapter.class";
// import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OWL_DATE_TIME_LOCALE } from "ng-pick-datetime";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SharedModule } from "src/app/shared/shared.module";
import { ReservationFormComponent } from "./reservation-form/reservation-form.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { CarSummaryComponent } from "./reservation-form/car-summary/car-summary.component";
import { MomentModule } from "ngx-moment";
import { DigitOnlyDirective } from "src/app/shared/directives/numbersOnly";
import { MatDialogModule } from "@angular/material/dialog";
import { ReservationDialogComponent } from "./reservation-form/reservation-dialog/reservation-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { CarReviewComponent } from './car-details/car-review/car-review.component';

@NgModule({
  declarations: [
    CarsListComponent,
    CarsListItemComponent,
    ConvertCategoryPipe,
    CarDetailsComponent,
    CarCarouselComponent,
    ShowRatingComponent,
    CarReservationTabComponent,
    ReservationFormComponent,
    CarSummaryComponent,
    DigitOnlyDirective,
    ReservationDialogComponent,
    CarReviewComponent
    // SearchFiltersComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    FormsModule,
    RatingModule,
    CarouselModule,
    WavesModule,
    NgxGalleryModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    // OwlMomentDateTimeModule
    MatInputModule,
    MatAutocompleteModule,
    HomeModule,
    ButtonsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTooltipModule,
    MatIconModule,
    MomentModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ReservationDialogComponent],
  exports: [
    CarsListComponent,
    CarsListItemComponent,
    ConvertCategoryPipe,
    ShowRatingComponent,
    DigitOnlyDirective,
    ButtonsModule,
    WavesModule
  ],
  providers: [
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    // {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
    { provide: OWL_DATE_TIME_LOCALE, useValue: "bg" }
  ]
})
export class VehiclesModule {}
