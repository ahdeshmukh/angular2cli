import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UtilityService, AuthenticationService, UserService]
})
export class HeaderComponent implements OnInit {

  isIn: boolean
  constructor(private utilityService: UtilityService, private authenticationService: AuthenticationService) { 
    this.isIn = false;
  }

  ngOnInit() {
  }

  toggleInClass() {
    this.isIn = (this.isIn === false) ? true : false;
  }

  isProductionEnv() {
    return this.utilityService.isProductionEnv();
  }

  isUserLoggedIn():boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  isAdmin():boolean {
    return this.authenticationService.isAdmin();
  }

}
