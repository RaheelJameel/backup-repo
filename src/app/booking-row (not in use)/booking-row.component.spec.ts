import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRowComponent } from './booking-row.component';

describe('BookingRowComponent', () => {
  let component: BookingRowComponent;
  let fixture: ComponentFixture<BookingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
