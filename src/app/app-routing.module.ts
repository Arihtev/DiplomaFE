import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./home/home.module").then(
        module => module.HomeModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: "host",
    loadChildren: () =>
      import("./hosting/hosting.module").then(
        module => module.HostingModule
      ),
    canActivate: [AuthGuard]
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
