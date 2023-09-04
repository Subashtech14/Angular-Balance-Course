import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {
  constructor(private router: ActivatedRoute) {

  }
  id: number=0;
  id$=this.router.paramMap.subscribe(params => {params.get('id');})
  ngOnInit(): void {

    // this.id$=this.router.params.pipe(
    //   map(params=>params['id'])
    // )
    // this.id=this.router.snapshot.params['id'];
    // this.router.params.subscribe((params) => {
    //   console.log(params);
    //   this.id = params['id'];
    // })
  }
}
