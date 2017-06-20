import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingListComponent } from './home-booking-list.component';

describe('HomeBookingListComponent', () => {
  let component: HomeBookingListComponent;
  let fixture: ComponentFixture<HomeBookingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBookingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
