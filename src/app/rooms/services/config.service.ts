import { Inject,Injectable } from '@angular/core';
import { RouteConfig } from 'src/app/services/routeConfig';
import { RouteConfigToken } from 'src/app/services/routerConfig.service';

@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken:RouteConfig) {
    console.log('Config Service Initialized...');
    console.log(this.configToken);
    
  }
}
