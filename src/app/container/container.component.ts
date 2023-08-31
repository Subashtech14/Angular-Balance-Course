<<<<<<< HEAD
import { Host,AfterContentInit, Component, ContentChild, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';
=======
<<<<<<< HEAD
import { AfterContentInit, Component, ContentChild, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
=======
import { Host,AfterContentInit, Component, ContentChild, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';
>>>>>>> 451c4e8 (Dependency Injection and its Resolution Members)
>>>>>>> c815516 (Dependency Injection)

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
<<<<<<< HEAD
  styleUrls: ['./container.component.scss'],
  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit,OnDestroy{
@ContentChild(EmployeeComponent) employee !:EmployeeComponent;
constructor(@Host() private roomsService:RoomsService){

}
=======
<<<<<<< HEAD
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit,AfterContentInit,OnDestroy{
@ContentChild(EmployeeComponent) employee !:EmployeeComponent;
=======
  styleUrls: ['./container.component.scss'],
  providers:[RoomsService]
})
export class ContainerComponent implements OnInit,AfterContentInit,OnDestroy{
@ContentChild(EmployeeComponent) employee !:EmployeeComponent;
constructor(@Host() private roomsService:RoomsService){

}
>>>>>>> 451c4e8 (Dependency Injection and its Resolution Members)
>>>>>>> c815516 (Dependency Injection)
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
