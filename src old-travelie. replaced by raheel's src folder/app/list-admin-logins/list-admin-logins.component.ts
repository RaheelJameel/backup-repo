import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-admin-logins',
  templateUrl: './list-admin-logins.component.html',
  styleUrls: ['./list-admin-logins.component.css', '../../../resources/css/style.css']
})
export class ListAdminLoginsComponent implements OnInit {

  

  constructor() {

  this.adminID = [1,2,3,4]; 
	this.username = ['admin', 'usman', 'saadat', 'raheel'];
	this.password = ['admin','admin','admin','admin'];
  this.action = [];


   }

  ngOnInit() {
  }

}
