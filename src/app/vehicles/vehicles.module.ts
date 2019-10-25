import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsListItemComponent } from './cars-list/cars-list-item/cars-list-item.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ConvertCategoryPipe } from '../pipes/convert-category.pipe';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { NgxGalleryModule } from 'ngx-gallery';
import { CarCarouselComponent } from './car-details/car-carousel/car-carousel.component';
import { ShowRatingComponent } from '../shared/show-rating/show-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CarsListComponent, CarsListItemComponent, ConvertCategoryPipe, CarDetailsComponent, CarCarouselComponent, ShowRatingComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    FormsModule,
    RatingModule,
    CarouselModule,
    WavesModule,
    NgxGalleryModule,
    NgbModule
  ]
})
export class VehiclesModule { }
