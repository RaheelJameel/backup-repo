import { Component, OnInit, Input } from '@angular/core';
import { HomeBooking } from './home-booking-row.model';

@Component({
  selector: "[app-home-booking-row]",
  templateUrl: './home-booking-row.component.html',
  styleUrls: ['./home-booking-row.component.css']
})
export class HomeBookingRowComponent implements OnInit {
  @Input() homebooking: HomeBooking;

  constructor() { }

  ngOnInit() {
  }

}
