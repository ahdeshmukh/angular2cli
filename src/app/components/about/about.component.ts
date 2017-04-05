import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [UtilityService]
})
export class AboutComponent implements OnInit {

  imagesPath: string;
  logoImagesPath: string;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.imagesPath = this.utilityService.getImagesBasePath();
    this.logoImagesPath = this.imagesPath + '/logos/';
  }

}
