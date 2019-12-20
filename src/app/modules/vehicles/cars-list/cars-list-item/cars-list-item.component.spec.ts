import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListItemComponent } from './cars-list-item.component';

describe('CarsListItemComponent', () => {
  let component: CarsListItemComponent;
  let fixture: ComponentFixture<CarsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
