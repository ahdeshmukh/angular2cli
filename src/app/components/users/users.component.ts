import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UtilityService]
})
export class UsersComponent implements OnInit {

  name: string;
  email: string;
  address: address;
  environment: any;
  
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@example.com';
    this.address = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipcode: 10001
    };
    this.environment = this.utilityService.getEnvironmentInfo();
  }

}

interface address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}
