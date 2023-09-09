import { Component } from '@angular/core';
import { ConfigService } from '../rooms/services/config.service';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title:string='';
  constructor(private configService:ConfigService) {
    console.log('Config Service Initialized...');
  }
}
