import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  // sideClass = "navbar navbar-expand-lg navbar-dark top-nav-collapse"
  sideClass: Observable<string> = of("navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav")

}
