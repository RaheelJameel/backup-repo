import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeBookingListComponent } from './home-booking-list/home-booking-list.component';
import { HomeBookingRowComponent } from './home-booking-row/home-booking-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeInfoComponent,
    HomeBookingListComponent,
    HomeBookingRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
