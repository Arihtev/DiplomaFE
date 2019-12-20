import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SearchFormComponent } from './homepage/search-form/search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl } from 'ng-pick-datetime';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
import { DefaultIntl } from '../../shared/pipes/custom-date-time-adapter.class';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchFiltersComponent } from './homepage/search-form/search-filters/search-filters.component';


@NgModule({
  declarations: [HomepageComponent, SearchFormComponent, SearchFiltersComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    BsDatepickerModule,
    // NgxPageScrollCoreModule,
    // NgxPageScrollModule
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ButtonsModule,
    WavesModule,
    CollapseModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    SearchFiltersComponent
  ],
  providers: [
    {provide: OwlDateTimeIntl, useClass: DefaultIntl},
  ]
})
export class HomeModule { }
