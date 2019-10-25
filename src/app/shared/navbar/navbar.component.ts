import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import decode from 'jwt-decode';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/authentication/user';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: IUser;
  sideclass = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"
  landingPageClass = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"
  otherPageClass = "navbar sticky-top navbar-expand-lg navbar-dark black-color"

  constructor(private authService: AuthService, private router: Router, private navService: NavbarService) { 
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/"){
          this.sideclass = this.landingPageClass
        }
        else{
          this.sideclass = this.otherPageClass
        }
      }
    })
  }

  ngOnInit() {
  }

  loggedIn() {
    // return !!localStorage.getItem('token')
    return this.authService.loggedIn()
  }

  printInfo() {
    console.log(this.currentUser)
  }
}
