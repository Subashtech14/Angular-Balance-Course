import { Inject, Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.services';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest,HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  // roomList: RoomList[]=[{
  //   roomNumber: 101,
  //   roomType: 'Deluxe',
  //   amenities: 'TV, AC, Wifi',
  //   price: 100,
  //   photos: 'https://picsum.photos/200',
  //   checkInTime: new Date('11/11/2000'),
  //   checkOutTime: new Date('11/12/2002'),
  //   rating:3.4
  // },
  // {
  //   roomNumber: 102,
  //   roomType: 'Deluxe',
  //   amenities: 'TV, AC, Wifi',
  //   price: 100,
  //   photos: 'https://picsum.photos/200',
  //   checkInTime: new Date('11/12/2020'),
  //   checkOutTime: new Date('11/13/2020'),
  //   rating:4
  // },
  // {
  //   roomNumber: 103,
  //   roomType: 'Deluxe',
  //   amenities: 'TV, AC, Wifi',
  //   price: 100,
  //   photos: 'https://picsum.photos/200',
  //   checkInTime: new Date('11/1/2023'),
  //   checkOutTime: new Date('11/1/2023'),
  //   rating:5
  // }];
  roomList: RoomList[]=[];
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig,private http:HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  }
  //headers=new HttpHeaders({'token':'12345564654sdgdg'});
  getRooms$ = this.http.get<RoomList[]>('api/Rooms/').pipe(
  shareReplay(1)
);


  getRooms(){
    // return this.roomList;
    
    return this.http.get<RoomList[]>('api/Rooms/');
  }
  addRoom(room:RoomList){
    return this.http.post<RoomList[] >('api/Rooms/',room);
  }
  editRoom(room:RoomList){
    return this.http.put<RoomList[] >(`api/Rooms/${room.roomNumber}`,room); 
  }
  delete(id:string){
    return this.http.delete<RoomList[]>(`api/Rooms/${id}`);

  }
  getPhotos(){
    const request=new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,
    {reportProgress:true}
    );
    return this.http.request(request);
  }
}
