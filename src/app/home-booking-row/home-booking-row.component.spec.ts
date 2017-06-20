import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingRowComponent } from './home-booking-row.component';

describe('HomeBookingRowComponent', () => {
  let component: HomeBookingRowComponent;
  let fixture: ComponentFixture<HomeBookingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBookingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
