import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/models/site-db/cars';
import { SiteCardbService } from 'src/app/services/site-cardb/site-cardb.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { IUser } from 'src/app/models/authentication/user';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent implements OnInit {

  currentUser: IUser
  cars: ICar[] = []

  constructor(private service: SiteCardbService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe((res: IUser) => {
      this.currentUser = res
    })
    this.service.get_all_cars().subscribe((res: ICar[]) => {
      console.log(res)
      this.cars = res.filter(x => x.owner.id == this.currentUser.id)
    },
    err => {
    })
  }

  print(car){
    console.log(car)
  }
}
