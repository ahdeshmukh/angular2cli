import { Injectable } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService) { }

  login(userCredentials: any) {
    
    let currentUser: any;
    let firstName: string, lastName: string, email: string;
    
    /*setTimeout(() => {
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
    }, 3000);*/

    let observable$ = new Observable(observer => {
      setTimeout(() => {
        if(userCredentials.userRole === 'admin') {
          firstName = 'Admin';
          lastName = 'User';
          email = 'admin@example.com';
        } else {
          // TODO - make a call to randouser.me and just get 1 record back
          firstName = 'Authenticated';
          lastName = 'User';
          email = 'auth@example.com';
        }
        
        // TODO - create an object of type currentLoggedInUser which has firstName, lastName, email and role properties
        currentUser = {"firstName": firstName, "lastName": lastName, "email": email, "role": userCredentials.userRole};
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        observer.next(this.isUserLoggedIn());
      }, 3000)
    });
    observable$.subscribe(
      value => value,
      err => {},
      () => console.log('this is the end')
    );
    return observable$;

  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isUserLoggedIn():boolean {
    // TODO - check if currentUser object is of type currentLoggedInUser created in loin method
    let currentUser: any = localStorage.getItem('currentUser');
    if(currentUser && currentUser != "undefined" && currentUser != "null") {
      return true;
    }
    return false;
  }

  getCurrentLoggedInUser() {
    return localStorage.getItem('currentUser');
  }

}
