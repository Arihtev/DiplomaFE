import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelResComponent } from './cancel-res.component';

describe('CancelResComponent', () => {
  let component: CancelResComponent;
  let fixture: ComponentFixture<CancelResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
