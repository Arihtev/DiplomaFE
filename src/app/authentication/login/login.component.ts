import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registeredUserData = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    // console.log(this.registeredUserData)
    this.authService.loginUser(this.registeredUserData).subscribe((res: {token: string})=> {
      localStorage.setItem('token', res.token)
      this.router.navigate([''])
      this.authService.saveUser()
      // this.service.loggedIn()
    },
    err => console.log(err))
  }

}