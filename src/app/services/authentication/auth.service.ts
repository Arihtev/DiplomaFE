import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service: HttpClient, private router: Router) { }

  loginUser(user) {
    return this.service.post('http://127.0.0.1:8000/users/test/', ({
      username: user.username,
      password: user.password,
    }))
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
