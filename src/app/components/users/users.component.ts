import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UtilityService, UserService]
})
export class UsersComponent implements OnInit {

  //name: string;
  //email: string;
  //address: address;
  environment: any;

  users: any;
  
  constructor(private utilityService: UtilityService, private userService: UserService) { }

  ngOnInit() {
    /*this.name = 'John Doe';
    this.email = 'john.doe@example.com';
    this.address = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipcode: 10001
    };*/
    this.environment = this.utilityService.getEnvironmentInfo();

    /*this.users = [
      {"name": "John Doe", "email": "john.doe@example.com", "address":{"street":"123 Main St", "city":"New York","state":"NY","zipcode":10001}},
      {"name": "Jane Doe", "email": "jane.doe@example.com", "address":{"street":"1 Pacific Blvd", "city":"Los Aneles","state":"CA","zipcode":90001}}
    ];*/

    this.userService.getUsers()
      .subscribe(respUsers => this.users = respUsers.results);
  

  }

}

/*interface address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}*/