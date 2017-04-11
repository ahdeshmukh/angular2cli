import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UtilityService]
})
export class HeaderComponent implements OnInit {

  isIn: boolean
  constructor(private utilityService: UtilityService) { 
    this.isIn = false;
  }

  ngOnInit() {
  }

  toggleInClass() {
    this.isIn = (this.isIn === false) ? true : false;
  }

  isProductionEnv() {
    return this.utilityService.isProductionEnv();
  }

}
