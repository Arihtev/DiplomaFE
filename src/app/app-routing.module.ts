import { LoginComponent } from './core/authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './core/authentication/registration/registration.component';
import { AuthGuard } from './core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./modules/home/home.module").then(
        module => module.HomeModule
      ),
  },
  {
    path: "host",
    loadChildren: () =>
      import("./modules/hosting/hosting.module").then(
        module => module.HostingModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: "user",
    loadChildren: () =>
      import("./modules/user/user.module").then(
        module => module.UserModule
      ),
  },
  {
    path: "cars",
    loadChildren: () =>
      import("./modules/vehicles/vehicles.module").then(
        module => module.VehiclesModule
      ),
  },
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
