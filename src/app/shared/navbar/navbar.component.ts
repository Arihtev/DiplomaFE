import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit, NgZone, TemplateRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import decode from 'jwt-decode';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/authentication/user';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from 'src/app/authentication/registration/registration.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  bsModalRef: BsModalRef;
  currentUser: IUser;
  sideclass = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"
  landingPageClass = "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav"
  otherPageClass = "navbar sticky-top navbar-expand-lg navbar-dark black-color"

  register = RegistrationComponent
  login = LoginComponent

  constructor(private authService: AuthService, private router: Router, private navService: NavbarService, private modalService: BsModalService) { 
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

  openModalWithComponent(component) {
    this.bsModalRef = this.modalService.show(component, {class: 'modal-dialog-centered'});
    this.bsModalRef.content.closeBtnName = 'Close';
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
