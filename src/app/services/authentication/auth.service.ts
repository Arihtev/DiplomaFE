import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import decode from 'jwt-decode';
import { IUser } from 'src/app/models/authentication/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  CAR_DB_URL: string = 'http://127.0.0.1:8000'
  // 'http://10.10.63.248'

  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private service: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUserSubject = new BehaviorSubject<IUser>(this.var);
    this.currentUser = this.currentUserSubject.asObservable();
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isAuthenticated()
      }
    })
  }

  jwtHelper = new JwtHelperService();

  registerUser(user){
    return this.service.post(`${this.CAR_DB_URL}/users/register/`, ({
      username: user.username,
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName,
    }))
  }

  validateUsername(username){
    return this.service.post(`${this.CAR_DB_URL}/users/check-username/`, ({
      username: username
    }))
  }

  validateEmail(email){
    return this.service.post(`${this.CAR_DB_URL}/users/check-email/`, ({
      email: email
    }))
  }

  loginUser(user) {
    return this.service.post(`${this.CAR_DB_URL}/users/api/token/`, ({
      username: user.username,
      password: user.password,
    }))
  }

  saveUser() {
    let tokenPayload = decode(localStorage.getItem('token'));
    let userId = tokenPayload.user_id

    this.service.get(`${this.CAR_DB_URL}/users/user/` + userId).subscribe((res: IUser) => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      // this.var = res
      this.currentUserSubject.next(res);
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
    if (this.jwtHelper.isTokenExpired(token)){
      console.log("expired")
      localStorage.removeItem('token')
      localStorage.removeItem('currentUser')
      return false
    }
    else
      return true
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser')
    this.router.navigate([''])
  }

}
