import { Injectable } from '@angular/core';
import { HttpClient, HttpXhrBackend, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { TokenInterceptorService } from '../../interceptors/token-interceptor/token-interceptor.service';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService extends HttpClient{

  constructor(backend: HttpXhrBackend, private loaderService: LoaderService){
    super(backend);
  }

  public get(url: string): Observable<any> {

    this.showLoader();

    let headers = new HttpHeaders()
    if (localStorage.getItem("token")){
      headers = headers.set('Authorization', `JWT ${localStorage.getItem("token")}`)
    }
    // console.log("Loading...")

    return super.get(url, {'headers': headers}).pipe(
      tap((res: Response) => {
        // console.log("Loaded!")
        this.hideLoader()
      }
    ))
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}