import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UtilityService]
})
export class HomeComponent implements OnInit {

  imagesPath: string;
  logoImagesPath: string;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.imagesPath = this.utilityService.getImagesBasePath();
    this.logoImagesPath = this.imagesPath + '/logos/';
  }

}
