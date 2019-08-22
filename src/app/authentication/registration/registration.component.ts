import { AuthService } from './../../services/authentication/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registeredUserData = {
    username: '',
    password: ''
  }

  constructor(private service: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  printInfo(){
    console.log(this.auth.loggedIn())
  }

  registerUser(){
    console.log(this.registeredUserData)
    this.service.post('http://127.0.0.1:8000/users/test/', {
      username: this.registeredUserData.username,
      password: this.registeredUserData.password
    }).subscribe((res: {token: string})=> {
      localStorage.setItem('token', res.token)
      console.log(res)
    },
    err => console.log(err))
  }

}
