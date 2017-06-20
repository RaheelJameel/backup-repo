import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  vanTypes: string[];
  departureTimes: string[];
  departureDates: string[];
  destinations: string[];
  availableSeats: string[];
  bookingIDs: string[];


  constructor() {
      this.vanTypes = ['Economy','AC','AC'];
      this.departureTimes = ['00:59','01:59','01:59'];
      this.departureDates = ['2016-12-11','2016-12-11','2016-12-11'];
      this.destinations = ['Peshawar','Peshawar','Lahore'];
      this.availableSeats = ['10','13','11'];
      this.bookingIDs = ['0','0','0'];
  }

  ngOnInit() {
  }

}
