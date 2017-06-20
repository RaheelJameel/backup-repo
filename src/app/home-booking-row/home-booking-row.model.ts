export class HomeBooking {
  vanType: string;
  departureTime: string;
  departureDate: string;
  destination: string;
  availableSeat: number;
  bookingID: number;

  constructor(vanType: string, departureTime: string, departureDate: string, destination: string, availableSeat: number, bookingID: number) {
      this.vanType = vanType;
      this.departureTime = departureTime;
      this.departureDate = departureDate;
      this.destination = destination;
      this.availableSeat = availableSeat;
      this.bookingID = bookingID;
  }

}
