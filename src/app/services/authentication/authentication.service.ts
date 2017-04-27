import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService, private router: Router) { }

  login(userCredentials: any) {
    
    let currentUser: any;
    let firstName: string, lastName: string, email: string, picture: string;
    
    let observable$ = new Observable(observer => {
      setTimeout(() => {
        if(userCredentials.userRole === 'admin') {
          firstName = 'Admin';
          lastName = 'User';
          email = 'admin@example.com';
        } else {
          firstName = 'Authenticated';
          lastName = 'User';
          email = 'auth@example.com';

          let randomUsersArray = [
            {"firstName":"Terry", "lastName":"Stultiens", "email":"terry.stultiens@example.com", "picture":"https://randomuser.me/api/portraits/thumb/men/70.jpg"},
            {"firstName":"Ashley", "lastName":"Marshal", "email":"ashley.marshall@example.com", "picture":"https://randomuser.me/api/portraits/thumb/women/21.jpg"},
            {"firstName":"Megan", "lastName":"Caldwell", "email":"megan.caldwell@example.com", "picture":"https://randomuser.me/api/portraits/thumb/women/56.jpg"},
            {"firstName":"Isaiah", "lastName":"Terry", "email":"isaiah.terry@example.com", "picture":"https://randomuser.me/api/portraits/thumb/men/66.jpg"},
            {"firstName":"Ray", "lastName":"Chavez", "email":"ray.chavez@example.com", "picture":"https://randomuser.me/api/portraits/thumb/men/12.jpg"},
            {"firstName":"Sarah", "lastName":"Foster", "email":"jeanne.foster@example.com", "picture":"https://randomuser.me/api/portraits/thumb/women/4.jpg"}
          ];

          let randomNum = Math.floor(Math.random() * 6);
          let user = (randomUsersArray[randomNum]) ? randomUsersArray[randomNum] : randomUsersArray[0];
          
          firstName = user.firstName;
          lastName = user.lastName;
          email = user.email;
          picture = user.picture;
          
        }
        
        // TODO - create an object of type currentLoggedInUser which has firstName, lastName, email and role properties
        currentUser = {"firstName": firstName, "lastName": lastName, "email": email, "role": userCredentials.userRole, "picture": picture};
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        observer.next(this.isUserLoggedIn());
      }, 2000)
    });
    /*observable$.subscribe(
      value => value,
      err => {},
      () => console.log('this is the end')
    );*/
    return observable$;

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
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
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isAdmin():boolean {
    let isAdmin = false;
    if(this.isUserLoggedIn()) {
      let currentUser:any = this.getCurrentLoggedInUser();
      if(currentUser.role === 'admin') {
        isAdmin = true;
      }
    }
    return isAdmin;
  }

}
