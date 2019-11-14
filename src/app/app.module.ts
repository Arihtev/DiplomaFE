import { HomeModule } from './home/home.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { HostingModule } from './hosting/hosting.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './shared/auth.guard';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CollapseModule, BsDropdownModule, PopoverModule } from 'ngx-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { environment } from '../environments/environment'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { TokenInterceptorService } from './services/authentication/token-interceptor.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarDirective } from './directives/navbar.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarDirective,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxPageScrollCoreModule.forRoot(
      {duration: 1100, easingLogic: environment.myEasing}
    ),
    NgxPageScrollModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    VehiclesModule,
    HomeModule,
    MatInputModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    MatProgressSpinnerModule
  ],
  entryComponents: [
    AuthenticationComponent
  ],
  providers: [AuthGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
