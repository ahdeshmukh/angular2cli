import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UtilityService {

  environment: any;
  constructor() { }

  getEnvironmentInfo() {
    return environment; // name of the constant in environment.*.ts files
  }

  getBasePath() {
    let environment = this.getEnvironmentInfo();
    return environment.protocol+'://'+environment.hostname;
  }

  getImagesBasePath() {
    let basePath = this.getBasePath();
    let environment = this.getEnvironmentInfo();
    return basePath+'/'+environment.assets+'/'+environment.images;
  }

}
