import { Component } from '@angular/core';
import { ConfigService } from '../rooms/services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  constructor(private configService:ConfigService) {
    console.log('Config Service Initialized...');
  }
}
