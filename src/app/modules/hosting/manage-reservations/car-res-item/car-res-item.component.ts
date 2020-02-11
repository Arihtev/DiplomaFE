import { Component, OnInit, Input } from '@angular/core';
import { IReservation } from 'src/app/shared/models/site-db/cars';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-car-res-item',
  templateUrl: './car-res-item.component.html',
  styleUrls: ['./car-res-item.component.scss']
})
export class CarResItemComponent implements OnInit {

  @Input() reservation: IReservation;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
