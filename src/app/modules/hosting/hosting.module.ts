import { VehiclesModule } from '../vehicles/vehicles.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropDirective } from './add-vehicle/form-description/image-upload/drag-drop.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
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
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ImageUploadComponent } from './add-vehicle/form-description/image-upload/image-upload.component';
import { SortableModule } from 'ngx-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MatListModule } from '@angular/material/list';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { EditCarComponent } from './manage-cars/edit-car/edit-car.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EditMainComponent } from './manage-cars/edit-car/edit-main/edit-main.component';
import { EditSecondaryComponent } from './manage-cars/edit-car/edit-secondary/edit-secondary.component';
import { EditExtrasComponent } from './manage-cars/edit-car/edit-extras/edit-extras.component';
import { EditImagesComponent } from './manage-cars/edit-car/edit-secondary/edit-images/edit-images.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarResItemComponent } from './manage-reservations/car-res-item/car-res-item.component';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    AddVehicleComponent,
    FormMainComponent,
    FormLocationComponent,
    FormAmenitiesComponent,
    FormDescriptionComponent,
    FormRulesComponent,
    ImageUploadComponent,
    DragDropDirective,
    ManageCarsComponent,
    EditCarComponent,
    ManageReservationsComponent,
    EditMainComponent,
    EditSecondaryComponent,
    EditExtrasComponent,
    EditImagesComponent,
    CarResItemComponent,
  ],
  imports: [
    CommonModule,
    HostingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    DragDropModule,
    MatCardModule,
    PopoverModule,
    MatListModule,
    NgbModule,
    VehiclesModule,
    MatTabsModule,
    MatTooltipModule,
    MatIconModule,
    SharedModule,
    MomentModule
  ],
})
export class HostingModule { }
