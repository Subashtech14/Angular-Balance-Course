import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `<h1>Hello World from inline template</h1>`,
  // styles:["h1{color:red}"]
})
export class AppComponent implements OnInit {
  constructor(@Optional() private loggerService:LoggerService,){

  }
  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText='Hilton Hotel';
  }
  title = 'hotelinventoryapp';
  role = 'admin';
  @ViewChild('name',{static:true})name!:ElementRef;
  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //  const componentRef = this.vcr.createComponent(RoomsComponent);
  //  componentRef.instance.numberofRooms=50;
  // }
  
}
