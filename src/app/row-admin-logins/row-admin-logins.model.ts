export class RowAdminLogins {
    adminID: number;
	username: string;
	password: string;
    action: string;

    constructor (adminID: number, username: string, password: string, action: string) {
        this.adminID = adminID;
	    this.username = username;
	    this.password = password;
        this.action = action;
    }
}