import { AuthService } from "../../../core/services/authentication/auth.service";
import { Component, OnInit, NgZone, TemplateRef } from "@angular/core";
import { Router, Event, NavigationEnd } from "@angular/router";
import decode from "jwt-decode";
import { Observable, Subscription } from "rxjs";
import { IUser } from "src/app/shared/models/authentication/user";
import { NavbarService } from "src/app/core/services/navbar/navbar.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AuthenticationComponent } from "src/app/core/authentication/authentication.component";
import { LanguageService } from "src/app/core/services/language/language.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  flag = 'british-flag'
  language;
  bsModalRef: BsModalRef;
  currentUser: IUser;
  sideclass =
    "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav";
  landingPageClass =
    "navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar intro-fixed-nav";
  otherPageClass = "navbar sticky-top navbar-expand-lg navbar-dark black-color";

  loginComponent = { title: "Вход", component: "login" };
  registrationComponent = { title: "Регистрация", component: "registration" };

  constructor(
    private authService: AuthService,
    private router: Router,
    private navService: NavbarService,
    private modalService: BsModalService,
    private languageService: LanguageService
  ) {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/" && window.innerWidth >= 893) {
          this.sideclass = this.landingPageClass;
        } else {
          this.sideclass = this.otherPageClass;
        }
      }
    });
  }

  public openModalWithComponent(component) {
    // console.log(component)
    const initialState = {
      title: component.title,
      component: component.component
    };
    this.bsModalRef = this.modalService.show(AuthenticationComponent, {
      ignoreBackdropClick: true,
      class: "modal-dialog-centered",
      initialState
    });
    this.bsModalRef.content.closeBtnName = "Close";
  }

  ngOnInit() {
    this.language = this.languageService.currentLang;
  }

  loggedIn() {
    // return !!localStorage.getItem('token')
    return this.authService.loggedIn();
  }

  switchLanguage() {
    this.languageService.changeLang();
    this.language = this.languageService.currentLang;
  }

  printInfo() {
    console.log(this.currentUser);
  }
}
