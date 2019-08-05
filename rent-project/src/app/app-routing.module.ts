import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo:"host"
  },
  {
    path: "host",
    loadChildren: () =>
      import("./hosting/hosting.module").then(
        module => module.HostingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
