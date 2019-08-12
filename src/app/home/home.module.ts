import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { SearchFormComponent } from './homepage/search-form/search-form.component';

@NgModule({
  declarations: [HomepageComponent, SearchFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BsDatepickerModule
    // NgxPageScrollCoreModule,
    // NgxPageScrollModule
  ]
})
export class HomeModule { }
