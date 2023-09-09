import { AfterViewChecked,
  AfterViewInit,ViewChildren, Component, 
  DoCheck, OnInit, QueryList, ViewChild, OnDestroy, SkipSelf} from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from './services/config.service';
@Component({
 selector: 'hinv-rooms',
 templateUrl: './rooms.component.html',
 styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent  implements OnInit,DoCheck,AfterViewInit,AfterViewChecked {

 title = 'Room List';
// @ViewChild(HeaderComponent) headerComponent!  : HeaderComponent
 @ViewChild(HeaderComponent,{static:true}) headerComponent!  : HeaderComponent
 @ViewChildren(HeaderComponent) headerChildrenComponent!  :QueryList<HeaderComponent>;
//view child for the first one instance view Children for more than one instance
//first executed
// roomService = new RoomsService();
constructor(@SkipSelf() private roomsService : RoomsService, private configService:ConfigService) {
  console.log('Config Service Initialized...');
  

}
stream = new Observable<string>(observer =>{
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  observer.error('Error Occured');
});
totalBytes = 0;
subscription!:Subscription;
//rooms$=this.roomsService.getRooms$;
error$:Subject<string>=new Subject<string>();
getError$=this.error$.asObservable();
rooms$=this.roomsService.getRooms$.pipe(
  catchError((err)=>{
    //console.log(err);
    this.error$.next(err.message);
    return [];
  })
);
roomsCount$=this.roomsService.getRooms$.pipe(
  map((rooms)=>rooms.length
))

ngOnInit(): void {
  console.log("Rooms Count "+this.roomsCount$);
  this.stream.subscribe({
    next:(data)=>{console.log(data);},
    complete:()=>{console.log("Completed");},
    error:(err)=>{console.log(err);}
  });
  this.stream.subscribe((data)=>{console.log(data);})

  this.roomsService.getPhotos().subscribe((event)=>{
    switch(event.type){
      case HttpEventType.Sent:{
        console.log("Request sent...");
        break;
      }
      case HttpEventType.ResponseHeader:{
        console.log("Response header received..."); 
        break;
      }
      case HttpEventType.DownloadProgress:{
        console.log(this.totalBytes); 
        this.totalBytes += event.loaded;
        break;
      }
      case HttpEventType.Response:{
        // console.log("Response received... "+event.body);
        break;
      }
    }
    this.roomsService.getRooms$.subscribe((data)=>{
      this.roomList=data;
    })
    
  })
 //console.log(this.headerComponent);
 
}
 ngAfterViewChecked(): void {
   //this.headerComponent.title='Rooms View';
 }
 ngAfterViewInit(): void {
 //console.log(this.headerComponent); 
 //If you do this you will get ngOnChanges occured twice error because of development mode angular will run twice ngoncheck in development mode
 //this.headerComponent.title='Rooms View';
//  this.headerChildrenComponent.last.title="Last Title";
 
 console.log(this.headerChildrenComponent);
 
 // this.headerChildrenComponent.forEach((headerComponent)=>{
 //   console.log(headerComponent.title);
   
 // })
 }
 ngDoCheck(): void {
   console.log('ngDoCheck');
 }
 selectedRoom!:RoomList;
 selectRoom(room:RoomList){
   this.selectedRoom=room
 }
 //After constructor is used and logic should be in here


 hotelName = 'Hilton Hotel';
 numberofRooms = 10;
 hideRooms = true;
 rooms: Room = {
   totalRooms: 20,
   availableRooms: 10,
   bookedRooms: 5
 }
 roomList: RoomList[] = []

 toogle() {
   this.hideRooms = !this.hideRooms;
   this.title = "Rooms List";
 }
 addRoom(){
   const room: RoomList = {
     roomNumber: "104",
     roomType: 'Deluxe',
     amenities: 'TV, AC, Wifi',
     price: 100,
     photos: 'https://picsum.photos/200',
     checkinTime: new Date('11/11/2000'),
     checkoutTime: new Date('11/12/2002'),
     rating:3
   }
   // this.roomList.push(room);
   //this.roomList=[...this.roomList,room];
   this.roomsService.addRoom(room).subscribe((data)=>{
     console.log(data);
     this.roomList=data;
     
   })
 }
 editRoom() {
   const room: RoomList = {
     roomNumber: "3",
     roomType: 'Deluxe With Balcony',
     amenities: 'TV, AC, Wifi',
     price: 100,
     photos: 'https://picsum.photos/200',
     checkinTime: new Date('11/11/2000'),
     checkoutTime: new Date('11/12/2002'),
     rating:3
  }
  this.roomsService.editRoom(room).subscribe((data)=>{
    console.log(data);
    this.roomList=data;
  })
}
deleteRoom(){
  // this.roomsService.delete('3').subscribe((data)=>{
  //   console.log(data);
  // this.roomList=data;
  // })
}
// ngOnDestroy(){
//   this.subscription.unsubscribe();
// }
}