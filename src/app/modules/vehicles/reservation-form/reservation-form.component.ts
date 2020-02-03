import { Component, OnInit } from "@angular/core";
import { ICar } from "src/app/shared/models/site-db/cars";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { IUser } from "src/app/shared/models/authentication/user";
import { AuthService } from "src/app/core/services/authentication/auth.service";
import { SiteCardbService } from "src/app/core/services/site-cardb/site-cardb.service";
import { MatSnackBar, MatDialog } from "@angular/material";
import { ReservationDialogComponent } from "./reservation-dialog/reservation-dialog.component";

@Component({
  selector: "app-reservation-form",
  templateUrl: "./reservation-form.component.html",
  styleUrls: ["./reservation-form.component.scss"]
})
export class ReservationFormComponent implements OnInit {
  // car: any = { "id": 9, "extras": [ { "id": 1, "category_id": 1, "name": "Антиблокираща система" }, { "id": 3, "category_id": 1, "name": "Въздушни възглавници" }, { "id": 4, "category_id": 1, "name": "Парктроник" }, { "id": 6, "category_id": 1, "name": "Система за подпомагане на спирането" }, { "id": 7, "category_id": 1, "name": "Система за защита от пробуксуване" }, { "id": 8, "category_id": 2, "name": "Bluetooth / handsfree система" }, { "id": 11, "category_id": 2, "name": "Бордкомпютър" }, { "id": 12, "category_id": 2, "name": "Навигация" }, { "id": 14, "category_id": 2, "name": "Подгряване на седалките" }, { "id": 15, "category_id": 2, "name": "Стерео уредба" }, { "id": 20, "category_id": 3, "name": "Рейлинг на покрива" }, { "id": 21, "category_id": 3, "name": "Халогенни фарове" }, { "id": 22, "category_id": 3, "name": "Аларма" }, { "id": 23, "category_id": 3, "name": "OFFROAD пакет" }, { "id": 24, "category_id": 3, "name": "Кожен салон" } ], "pictures": [ { "picture": "http://127.0.0.1:8000/media/photos/2019/10/22/8decc4ce-0427-4249-b2b2-136f1c999e4c.jpg" } ], "owner": { "id": 1, "username": "admin", "first_name": "Georgi", "last_name": "Arihtev", "email": "admin@mail.com", "gender": null, "photo": "http://127.0.0.1:8000/media/users/2019/08/27/test.jpg" }, "year": "2008", "make": "Kia", "model": "Sportage", "transmission": "Ръчна", "engine_type": "Дизелов", "category": "suv", "price": "50", "weekly_discount": null, "monthly_discount": null, "included_km": "200", "price_per_extra_km": "1.10", "region": "Благоевград", "city": "Белица", "address": "Адресс 23", "zip_code": "3000", "description": null, "seats": "5", "consumption": "8", "horsepower": "140", "pets": null, "smoking": null, "min_rent": null, "max_rent": null }

  // today = new Date();
  // start = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate())
  // end = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()+1)
  // selectedMoments = [moment(this.start).locale('bg').format('LL'), moment(this.end).locale('bg').format('LL')];
  // selectedMoments = [this.start, this.end]
  currentUser: IUser;
  car;
  reservationPrice;
  discount;
  daysReserved
  selectedMoments;
  formData = {
    card_owner_name: "GEORGI ARIHTEV",
    card_number: "1234123412341234",
    expiration_date: "02/21",
    cvv: "123",
    confirmation: false
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private dbService: SiteCardbService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    // this.formData = {
    //   id: 0,
    //   card_owner_name: '',
    //   card_number: '',
    //   expiration_date: '',
    //   cvv: ''
    // }
    if (window.history.state.car && window.history.state.selectedMoments) {
      this.car = window.history.state.car;
      this.selectedMoments = window.history.state.selectedMoments;
      this.reservationPrice = window.history.state.reservationPrice;
      this.discount = window.history.state.discount;
      this.daysReserved = window.history.state.daysReserved;
    } else {
      this.activatedRoute.params.subscribe(params => {
        this.router.navigate(["cars/" + params.id]);
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      panelClass: ["custom-snackbar"]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      width: "450px",
      data: { car: this.car, dates: this.selectedMoments },
      autoFocus: false,
      disableClose: true
    });
  }

  sendReservation() {
    let reservationData = {
      carId: this.car.id,
      renterId: this.currentUser.id,
      startDate: moment(this.selectedMoments[0]).format("YYYY-MM-D"),
      endDate: moment(this.selectedMoments[1]).format("YYYY-MM-D"),
      daysReserved: this.daysReserved,
      totalPrice: this.reservationPrice,
    };
    this.dbService.sendReservation(reservationData).subscribe(
      (res: any) => {
        // this.openSnackBar("Вашата резервация беше успешна!", "Затвори")
        //   this.router.navigate(["user/reservations/"])

        this.openDialog();
      },
      error => {
        console.log(error);
      }
    );
  }
}
