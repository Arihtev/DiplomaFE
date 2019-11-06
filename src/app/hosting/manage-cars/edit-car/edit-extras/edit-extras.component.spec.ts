import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExtrasComponent } from './edit-extras.component';

describe('EditExtrasComponent', () => {
  let component: EditExtrasComponent;
  let fixture: ComponentFixture<EditExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
