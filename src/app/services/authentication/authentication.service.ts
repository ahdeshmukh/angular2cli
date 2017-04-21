import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService) { }

  login(userCredentials: any) {
    
    let currentUser: any;
    let firstName: string, lastName: string;
    
    setTimeout(() => {
      if(userCredentials.userRole === 'admin') {
        firstName = 'Admin';
        lastName = 'User';
      } else {
        let user: any;
        this.userService.getUsers(1)
        .subscribe(respUser => user = respUser);
      }
      
      currentUser = {"firstName": "Admin", "lastName": "User", "role": userCredentials.userRole};
      
      localStorage.setItem('currentUser', currentUser);
    }, 3000);

  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isUserLoggedIn():boolean {
    let currentUser: any = localStorage.getItem('currentUser');
    if(currentUser && currentUser != "undefined" && currentUser != "null") {
      return true;
    }
    return false;
  }

  getCurrentLoggedInuser() {
    return localStorage.getItem('currentUser');
  }

}
