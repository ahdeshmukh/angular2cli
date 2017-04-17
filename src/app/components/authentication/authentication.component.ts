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

  login() {
    let currentUser: any;
    currentUser = {"firstName": "Amit", "lastName": "Deshmukh", "email": "amit.deshmukh@example.com", "role":["admin"]};
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
