import { Component, OnInit } from '@angular/core';
import { HomeBooking } from '../home-booking-row/home-booking-row.model';

@Component({
  selector: 'app-home-booking-list',
  templateUrl: './home-booking-list.component.html',
  styleUrls: ['./home-booking-list.component.css']
})
export class HomeBookingListComponent implements OnInit {
  homebookings: HomeBooking[];


  constructor() {
      this.homebookings = [
          new HomeBooking('Economy','00:59','2016-12-11','Peshawar',10,0),
          new HomeBooking('AC','01:59','2016-12-11','Peshawar',13,0),
          new HomeBooking('AC','01:59','2016-12-11','Lahore',11,0)
      ];
  }

  ngOnInit() {
  }

}
