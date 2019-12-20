import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReservationTabComponent } from './car-reservation-tab.component';

describe('CarReservationTabComponent', () => {
  let component: CarReservationTabComponent;
  let fixture: ComponentFixture<CarReservationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarReservationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReservationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
