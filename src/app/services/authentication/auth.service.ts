import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import decode from 'jwt-decode';
import { IUser } from 'src/app/models/authentication/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service: HttpClient, private router: Router) { }

  jwtHelper = new JwtHelperService();

  currentUser = null

  loginUser(user) {
    return this.service.post('http://127.0.0.1:8000/users/api/token/', ({
      username: user.username,
      password: user.password,
    }))
  }

  saveUser() {
    let token = localStorage.getItem('token');
    let tokenPayload = decode(token);
    let userId = tokenPayload.user_id

    this.service.get('http://127.0.0.1:8000/users/user/' + userId).subscribe((res: IUser) => {
      this.currentUser = res
      localStorage.setItem('username', res.username)
      localStorage.setItem('photo', res.photo)
      localStorage.setItem('role', res.user_type)
    })
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('photo');
    localStorage.removeItem('role')

    this.router.navigate(['login'])
  }

  getUserPhoto() {
    return localStorage.getItem("photo");
  }

  getUserName() {
    if (localStorage.getItem("username"))
      return localStorage.getItem("username");
  }

  getUserRole() {
    if (localStorage.getItem("user"))
      return localStorage.getItem("user");
  }

}
