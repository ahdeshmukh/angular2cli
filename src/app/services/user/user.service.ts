import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private usersUrl = 'https://randomuser.me/api/?results=10&nat=us';
  
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map((response: Response) => response.json())
      .map(response => response.results)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "Error in getting data");
  }

}
