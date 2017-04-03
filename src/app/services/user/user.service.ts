import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private usersUrl = 'https://randomuser.me/api/?results=5&nat=us';
  
  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map((response:Response) => response.json());
  }

}
