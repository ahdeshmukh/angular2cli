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

  environment: any;
  users: any;
  
  constructor(private utilityService: UtilityService, private userService: UserService) { }

  ngOnInit() {
    
    this.environment = this.utilityService.getEnvironmentInfo();
    
    this.userService.getUsers()
      .subscribe(respUsers => this.users = respUsers);
  }

}