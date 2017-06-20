import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingRowComponent } from './booking-row/booking-row.component';
import { ListAdminLoginsComponent } from './list-admin-logins/list-admin-logins.component';
import { RowAdminLoginsComponent } from './row-admin-logins/row-admin-logins.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeinfoComponent,
    BookingListComponent,
    BookingRowComponent,
    ListAdminLoginsComponent,
    RowAdminLoginsComponent
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
