import { ChangeDetectionStrategy,Component,EventEmitter,Input, OnChanges, OnInit,Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges{

//ngOnChanges is used for change detection and used only when input is used
@Input() rooms:RoomList[]=[];
@Input() title:string='';
@Output() selectedRoom=new EventEmitter<RoomList>();
ngOnDestroy(): void {
  console.log('Destroyed');
  
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("Changes Occured:", changes['rooms'].currentValue);
  if(changes['title']){
    this.title=changes['title'].currentValue.toUpperCase();
  }
}
selectRoom(room:RoomList){
  this.selectedRoom.emit(room);
}
ngOnInit(): void {
  
}

}
