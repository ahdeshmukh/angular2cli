import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [UserService, AuthenticationService]
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('loginModal') public loginModal:ModalDirective;
  @ViewChild('accountModal') public accountModal:ModalDirective;
  
  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login(formValue: any) {
    this.authenticationService.login(formValue);
  }

  logout() {
    this.authenticationService.logout();
  }

  isUserLoggedIn():boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  showLoginModal():void {
    this.loginModal.show();
  }

  hideLoginModal():void {
    this.loginModal.hide();
  }

  showAccountModal():void {
    this.accountModal.show();
  }

  hideAccountModal():void {
    this.accountModal.hide();
  }

}
