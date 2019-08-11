import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAmenitiesComponent } from './form-amenities.component';

describe('FormAmenitiesComponent', () => {
  let component: FormAmenitiesComponent;
  let fixture: ComponentFixture<FormAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
