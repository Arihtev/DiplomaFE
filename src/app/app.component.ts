import { Component, HostListener } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { Router, NavigationStart, NavigationEnd, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';
import { CustomHttpService } from './core/services/custom-http/custom-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rent-project';

  constructor(private router : Router, customHttp: CustomHttpService){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        // this.routeLoading = true
      }
      if (event instanceof NavigationEnd) {
        // this.routeLoading = false
      }
    })
  };
}
