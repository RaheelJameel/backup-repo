import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-row',
  templateUrl: './booking-row.component.html',
  styleUrls: ['./booking-row.component.css']
})
export class BookingRowComponent implements OnInit {
  @Input() vanType: string;
  @Input() departureTime: string;
  @Input() departureDate: string;
  @Input() destination: string;
  @Input() availableSeat: string;
  @Input() bookingID: string;

  constructor() { }

  ngOnInit() {
  }

}
