import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDescriptionComponent } from './form-description.component';

describe('FormDescriptionComponent', () => {
  let component: FormDescriptionComponent;
  let fixture: ComponentFixture<FormDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
