import { ReactiveFormsModule } from '@angular/forms';
import { AddPlaceComponent } from './add-vehicle/add-place.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HostingRoutingModule } from './hosting-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { FormMainComponent } from './add-vehicle/form-main/form-main.component';
import { FormLocationComponent } from './add-vehicle/form-location/form-location.component';
import { FormAmenitiesComponent } from './add-vehicle/form-amenities/form-amenities.component';
import { FormDescriptionComponent } from './add-vehicle/form-description/form-description.component';
import { FormRulesComponent } from './add-vehicle/form-rules/form-rules.component';
import { FormPricingComponent } from './add-vehicle/form-pricing/form-pricing.component';

@NgModule({
  declarations: [
    AddPlaceComponent,
    FormMainComponent,
    FormLocationComponent,
    FormAmenitiesComponent,
    FormDescriptionComponent,
    FormRulesComponent,
    FormPricingComponent
  ],
  imports: [
    CommonModule,
    HostingRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatInputModule,
    
  ]
})
export class HostingModule { }
