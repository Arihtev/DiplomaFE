import { ICar, IFilters } from '../../../../shared/models/site-db/cars';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
import { IUser } from 'src/app/shared/models/authentication/user';
import { CarDatabaseService } from 'src/app/core/services/car-database/car-database.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SiteCardbService } from 'src/app/core/services/site-cardb/site-cardb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list-item',
  templateUrl: './cars-list-item.component.html',
  styleUrls: ['./cars-list-item.component.scss']
})
export class CarsListItemComponent implements OnInit {

  @Input() car: ICar;
  @Input() filters:IFilters;
  @Input() currentUser: IUser;

  @Output() update: EventEmitter<any> = new EventEmitter();

  // currentUser: IUser;

  rate: number = 3.6;

  config = new MatSnackBarConfig();

  constructor(private dbService: SiteCardbService, private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) { 
    if (this.authService.loggedIn()){
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
    }
  }

  ngOnInit() {
    // console.log(this.currentUser)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['custom-snackbar']
    });
  }

  refreshUser(){
    this.authService.saveUser()
    this.update.emit()
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  addToFavourites(carId){
    this.dbService.addToFavourites(carId).subscribe(res => {
      this.openSnackBar(res.toString(), "Затвори")
      this.refreshUser()
    })
  }

  openCarDetails(){
    this.router.navigate(["/cars/"+this.car.id], {
      state: {filters: this.filters}
    })
  }

}
