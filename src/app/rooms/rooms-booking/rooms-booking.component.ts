import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;
  id$!: Observable<number>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id$ = this.route.paramMap.pipe(
      map(params => {
        return Number(params.get('id'));
      })
    );
  }
}

// @Component({
//   selector: 'hinv-rooms-booking',
//   templateUrl: './rooms-booking.component.html',
//   styleUrls: ['./rooms-booking.component.scss']
// })
// export class RoomsBookingComponent {
//   constructor(private router: ActivatedRoute) {

//   }
//   id: number=0;
//   id$=this.router.paramMap.subscribe(params => {params.get('id');})
  // ngOnInit(): void {

    // this.id$=this.router.params.pipe(
    //   map(params=>params['id'])
    // )
    // this.id=this.router.snapshot.params['id'];
    // this.router.params.subscribe((params) => {
    //   console.log(params);
    //   this.id = params['id'];
    // })
//   }
// }
