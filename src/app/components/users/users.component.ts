import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name: string;
  email: string;
  address: address;
  environment: any;
  
  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@example.com';
    this.address = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipcode: 10001
    };
    this.environment = environment;
  }

}

interface address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}
