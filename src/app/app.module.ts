import { HomeModule } from './modules/home/home.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { HostingModule } from './modules/hosting/hosting.module';
import { JwtModule } from '@auth0/angular-jwt';
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
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CollapseModule, BsDropdownModule, PopoverModule } from 'ngx-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { environment } from '../environments/environment'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { RegistrationComponent } from './core/authentication/registration/registration.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { TokenInterceptorService } from './core/interceptors/token-interceptor/token-interceptor.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
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
    MatProgressSpinnerModule,
    SharedModule
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
