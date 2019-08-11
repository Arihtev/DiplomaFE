import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRulesComponent } from './form-rules.component';

describe('FormRulesComponent', () => {
  let component: FormRulesComponent;
  let fixture: ComponentFixture<FormRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
