import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('loginModal') public loginModal:ModalDirective;
  
  constructor() { }

  ngOnInit() {
  }

  login(formValue: any) {
    let currentUser: any;
    currentUser = {"firstName": formValue.firstName, "lastName": formValue.lastName, "role": formValue.userRole};
    localStorage.setItem('currentUser', currentUser);
    //this.hideLoginModal();
  }

  isUserLoggedIn() {
    let currentUser: any = localStorage.getItem('currentUser');
    if(currentUser && currentUser != "undefined" && currentUser != "null") {
      return true;
    }
    return false;
  }

  showLoginModal():void {
    this.loginModal.show();
  }

  hideLoginModal():void {
    this.loginModal.hide();
  }

}
