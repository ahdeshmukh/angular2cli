import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(formValue: any) {
    let currentUser: any;
    currentUser = {"firstName": formValue.firstName, "lastName": formValue.lastName, "role": formValue.userRole};
    localStorage.setItem('currentUser', currentUser);
  }

  isUserLoggedIn() {
    let currentUser: any = localStorage.getItem('currentUser');
    if(currentUser && currentUser != "undefined" && currentUser != "null") {
      return true;
    }
    return false;
  }

}
