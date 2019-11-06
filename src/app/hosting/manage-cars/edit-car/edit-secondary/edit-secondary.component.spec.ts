import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecondaryComponent } from './edit-secondary.component';

describe('EditSecondaryComponent', () => {
  let component: EditSecondaryComponent;
  let fixture: ComponentFixture<EditSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
