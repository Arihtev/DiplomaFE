import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPricingComponent } from './form-pricing.component';

describe('FormPricingComponent', () => {
  let component: FormPricingComponent;
  let fixture: ComponentFixture<FormPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
