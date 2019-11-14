import { Component, HostListener } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { Router, NavigationStart, NavigationEnd, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rent-project';

  loading = true

  constructor(private router : Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        console.log("start")
        this.loading = true
      }
      if (event instanceof NavigationEnd) {
        console.log("end")
        this.loading = false
      }
    })
  };

  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
}
