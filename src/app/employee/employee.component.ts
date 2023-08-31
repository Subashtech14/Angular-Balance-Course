<<<<<<< HEAD
import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
=======
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
>>>>>>> 451c4e8 (Dependency Injection and its Resolution Members)
>>>>>>> c815516 (Dependency Injection)

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
<<<<<<< HEAD
  styleUrls: ['./employee.component.scss'],
  //For Seprate Instamce of Room Service
  //providers:[RoomsService]
})
export class EmployeeComponent {
empName:string = 'John';
=======
<<<<<<< HEAD
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
empName:string = 'John';
=======
  styleUrls: ['./employee.component.scss'],
  //For Seprate Instamce of Room Service
  //providers:[RoomsService]
})
export class EmployeeComponent {
empName:string = 'John';
>>>>>>> c815516 (Dependency Injection)
// constructor(@Self() private roomsService:RoomsService){

// }
constructor( private roomsService:RoomsService){

}
<<<<<<< HEAD
=======
>>>>>>> 451c4e8 (Dependency Injection and its Resolution Members)
>>>>>>> c815516 (Dependency Injection)
}
