import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './rooms/services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: `<h1>Hello World from inline template</h1>`,
  // styles:["h1{color:red}"]
})
export class AppComponent implements OnInit {
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(initService.config);
    console.log('Config Service Initialized...');
  }
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
    ).subscribe((event) => {
      console.log('NavigationStart', event);
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    ).subscribe((event) => {
      console.log('Navigation Completed', event);
    })
    this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'Hilton Hotel';
    // this.localStorage.setItem('name', 'Subash');
  }
  title = 'hotelinventoryapp';
  role = 'admin';
  @ViewChild('name', { static: true }) name!: ElementRef;
  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //  const componentRef = this.vcr.createComponent(RoomsComponent);
  //  componentRef.instance.numberofRooms=50;
  // }
}
