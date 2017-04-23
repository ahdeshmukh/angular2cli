import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [UserService, AuthenticationService, UtilityService]
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('loginModal') public loginModal:ModalDirective;
  @ViewChild('accountModal') public accountModal:ModalDirective;

  isLoginInProgress:boolean = false;
  imagesPath:string;
  currentUser:any;

  
  constructor(private userService: UserService, 
              private authenticationService: AuthenticationService, 
              private utilityService: UtilityService) { }

  ngOnInit() {
    this.imagesPath = this.utilityService.getImagesBasePath();
  }

  login(formValue: any) {
    this.isLoginInProgress = true;
    this.authenticationService.login(formValue)
      .subscribe(value => {
        this.isLoginInProgress = false;
        this.currentUser = this.authenticationService.getCurrentLoggedInUser();
      });
  }

  logout() {
    this.authenticationService.logout();
  }

  isUserLoggedIn():boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  getCurrentUser():any {
    this.currentUser = this.authenticationService.getCurrentLoggedInUser();
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
