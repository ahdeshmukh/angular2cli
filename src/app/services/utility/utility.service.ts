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
    let env = this.getEnvironmentInfo();
    return env.protocol+'://'+env.hostname;
  }

  getImagesBasePath() {
    let basePath = this.getBasePath();
    let env = this.getEnvironmentInfo();
    return basePath+'/'+env.assets+'/'+env.images;
  }

  isProductionEnv() {
    let env = this.getEnvironmentInfo();
    return (env.name === 'PROD');
  }

}
