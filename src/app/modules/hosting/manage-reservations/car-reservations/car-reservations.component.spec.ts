import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReservationsComponent } from './car-reservations.component';

describe('CarReservationsComponent', () => {
  let component: CarReservationsComponent;
  let fixture: ComponentFixture<CarReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
