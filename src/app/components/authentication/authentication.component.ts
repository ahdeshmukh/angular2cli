import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
              private utilityService: UtilityService,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) { 
      
                this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
    this.imagesPath = this.utilityService.getImagesBasePath();
    this.currentUser = this.getCurrentUser();
  }

  login(formValue: any) {
    this.isLoginInProgress = true;
    this.authenticationService.login(formValue)
      .subscribe(value => {
        this.isLoginInProgress = false;
        this.currentUser = this.authenticationService.getCurrentLoggedInUser();
        let msg = 'Welcome, '+ this.currentUser.firstName + '. You have successfully logged in';
        this.toastr.success(msg, null, {toastLife:2000});
      });
  }

  logout() {
    this.authenticationService.logout();
    this.toastr.info('You have successfully logged out', null, {toastLife:2000});
  }

  isUserLoggedIn():boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  getCurrentUser():any {
    return this.authenticationService.getCurrentLoggedInUser();
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

  getFirstCharNameCapitalized():string {
    let user = this.getCurrentUser();
    let firstChar = user.firstName.charAt(0).toUpperCase();
    return firstChar;
  }

}
