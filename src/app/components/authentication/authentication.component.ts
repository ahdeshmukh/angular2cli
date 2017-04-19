import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [UserService]
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('loginModal') public loginModal:ModalDirective;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(formValue: any) {
    let currentUser: any;
    let firstName: string, lastName: string;

    if(formValue.userRole === 'admin') {
      firstName = 'Admin';
      lastName = 'User';
    } else {
      let user: any;
      this.userService.getUsers(1)
      .subscribe(respUser => user = respUser);
    }
    
    currentUser = {"firstName": "Admin", "lastName": "User", "role": formValue.userRole};

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
