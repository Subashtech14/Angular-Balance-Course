import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
email:string='';
password:string='';
constructor(private route:Router){}
Login(){
  if(this.email==='admin@gmail.com' && this.password==='admin'){
    // alert('Login Successful');
    // this.route.navigateByUrl('/rooms');
    this.route.navigate(['/rooms','add']);
  }
}
}
