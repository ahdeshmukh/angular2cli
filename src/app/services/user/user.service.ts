import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private randomUserUrl = 'https://randomuser.me/api/?nat=us';
  
  constructor(private http: Http) { }

  getUsers(limit = null, gender = null) {
    if(limit != "undefined" && limit != "null") {
      limit = 10;
    }
    let randomUserUrl: string;
    randomUserUrl = this.randomUserUrl + '&results='+limit;
    
    if(gender != "undefined" && gender != "null") {
      randomUserUrl += '&gender='+gender;
    }
    
    return this.http.get(randomUserUrl)
      .map((response: Response) => response.json())
      .map(response => response.results)
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "Error in getting data");
  }

}
