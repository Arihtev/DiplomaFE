import { ICar } from './../../../models/site-db/cars';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { IUser } from 'src/app/models/authentication/user';
import { CarDatabaseService } from 'src/app/services/car-database/car-database.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SiteCardbService } from 'src/app/services/site-cardb/site-cardb.service';

@Component({
  selector: 'app-cars-list-item',
  templateUrl: './cars-list-item.component.html',
  styleUrls: ['./cars-list-item.component.scss']
})
export class CarsListItemComponent implements OnInit {

  @Input() car: ICar;

  @Output() update: EventEmitter<any> = new EventEmitter();

  currentUser: IUser;

  rate: number = 3.6;

  config = new MatSnackBarConfig();

  constructor(private dbService: SiteCardbService, private authService: AuthService, private _snackBar: MatSnackBar) { 
    if (this.authService.loggedIn()){
      this.refreshUser()
    }
  }

  ngOnInit() {
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

}
