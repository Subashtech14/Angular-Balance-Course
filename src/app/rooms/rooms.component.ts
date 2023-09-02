import { AfterViewChecked,
  AfterViewInit,ViewChildren, Component, 
  DoCheck, OnInit, QueryList, ViewChild, OnDestroy, SkipSelf} from '@angular/core';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
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
constructor(@SkipSelf() private roomsService : RoomsService){

}
ngOnInit(): void {
  this.stream.subscribe({
    next:(data)=>{console.log(data);},
    complete:()=>{console.log("Completed");},
    error:(err)=>{console.log(err);}
  });
  this.stream.subscribe((data)=>{console.log(data);})
  this.roomsService.getRooms().subscribe((rooms)=>{
    console.log(rooms);
    this.roomList=rooms;
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
 hideRooms = false;
 rooms: Room = {
   totalRooms: 20,
   availableRooms: 10,
   bookedRooms: 5
 }
 roomList: RoomList[] = []
 stream = new Observable(observer =>{
   observer.next('user1');
   observer.next('user2');
   observer.next('user3');
   observer.complete();
   observer.error('Error Occured');
 });
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
     checkInTime: new Date('11/11/2000'),
     checkOutTime: new Date('11/12/2002'),
     rating:3
   }
   // this.roomList.push(room);
   this.roomList=[...this.roomList,room];
 }
}