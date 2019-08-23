import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user = ''
  displayName: string;

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { 
    this.zone.run(() => {
      this.displayName = this.authService.getUserName();
    });

  }

  ngOnInit() {
    this.displayName = this.authService.getUserName()
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  print() {
    console.log(this.user)
  }

}
