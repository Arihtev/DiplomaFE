import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/models/authentication/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user = ''
  // currentUserSubscription: Subscription;
  currentUser: IUser;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  print() {
    console.log(this.user)
  }

}
