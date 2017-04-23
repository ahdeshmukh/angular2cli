import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    let currentUser:any = this.authenticationService.getCurrentLoggedInUser();
    let allowedRoles = (route.data && route.data['roles']) ? route.data['roles'] as Array<String> : null;
    let isAccessAllowed = true;
    if(!currentUser) {
      isAccessAllowed = false;
    }
    if((isAccessAllowed) && (allowedRoles !== null)) {
      isAccessAllowed = allowedRoles.indexOf(currentUser.role) !== -1;
    }
    if(!isAccessAllowed) {
      this.router.navigate(['/home']);
    }
    return isAccessAllowed;
    //console.log(isAccessAllowed);
    //return true;
  }

}
