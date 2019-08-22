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

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.registeredUserData)
    this.service.loginUser(this.registeredUserData).subscribe((res: {token: string})=> {
      localStorage.setItem('token', res.token)
      this.router.navigate([''])
      this.service.loggedIn()
      console.log(res)
    },
    err => console.log(err))
  }

}