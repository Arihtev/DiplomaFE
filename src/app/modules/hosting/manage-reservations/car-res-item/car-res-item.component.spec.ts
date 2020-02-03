import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarResItemComponent } from './car-res-item.component';

describe('CarResItemComponent', () => {
  let component: CarResItemComponent;
  let fixture: ComponentFixture<CarResItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarResItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarResItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
