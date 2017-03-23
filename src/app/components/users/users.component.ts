import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name: string;
  email: string;
  address: address;
  
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
  }

}

interface address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}
