import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UtilityService {

  environment: any;
  constructor() { }

  getEnvironmentInfo() {
    return environment;
  }

}
