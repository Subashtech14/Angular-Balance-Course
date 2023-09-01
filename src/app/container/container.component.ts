
import { Host,AfterContentInit, Component, ContentChild, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';


@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit,OnDestroy{
@ContentChild(EmployeeComponent) employee !:EmployeeComponent;
constructor(@Host() private roomsService:RoomsService){
console.log(
roomsService.getRooms());
}
ngDoCheck(): void {
  console.log('ngDoCheck');
}
ngOnDestroy(): void {
  console.log('Destroyed');
}
ngOnInit(): void {
  console.log(this.employee);
}

ngAfterContentInit(): void {
  console.log(this.employee);
  this.employee.empName='Subash';
  
}
}
