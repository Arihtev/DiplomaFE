import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from 'src/app/shared/models/config/loader'
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor(private router : Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        this.show()
      }
      if (event instanceof NavigationEnd) {
        this.hide()
      }
    })
  }

  show() {
      this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
      this.loaderSubject.next(<LoaderState>{show: false});
  }
}
