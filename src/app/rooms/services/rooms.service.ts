import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.services';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[]=[{
    roomNumber: 101,
    roomType: 'Deluxe',
    amenities: 'TV, AC, Wifi',
    price: 100,
    photos: 'https://picsum.photos/200',
    checkInTime: new Date('11/11/2000'),
    checkOutTime: new Date('11/12/2002'),
    rating:3.4
  },
  {
    roomNumber: 102,
    roomType: 'Deluxe',
    amenities: 'TV, AC, Wifi',
    price: 100,
    photos: 'https://picsum.photos/200',
    checkInTime: new Date('11/12/2020'),
    checkOutTime: new Date('11/13/2020'),
    rating:4
  },
  {
    roomNumber: 103,
    roomType: 'Deluxe',
    amenities: 'TV, AC, Wifi',
    price: 100,
    photos: 'https://picsum.photos/200',
    checkInTime: new Date('11/1/2023'),
    checkOutTime: new Date('11/1/2023'),
    rating:5
  }];
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig){
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  }

 

  getRooms(){
    return this.roomList;
  }
}
