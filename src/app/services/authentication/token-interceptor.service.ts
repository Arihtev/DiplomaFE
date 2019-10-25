import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    if (!localStorage.getItem("token")){
      return next.handle(req)
      // console.log("No user")
    }
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `JWT ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

}
