import { Component, OnInit, Input } from '@angular/core';
import { RowAdminLogins} from './row-admin-logins.model';

@Component({
  selector: 'app-row-admin-logins',
  templateUrl: './row-admin-logins.component.html',
  styleUrls: ['./row-admin-logins.component.css']
})
export class RowAdminLoginsComponent implements OnInit {

    @Input() rowAdminLogin: RowAdminLogins;
  constructor() { }

  ngOnInit() {
  }

}
