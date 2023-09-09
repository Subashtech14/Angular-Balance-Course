import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {}
  Login(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isAdmin = true;
      this.isLoggedIn = true;
    } else if (email === 'user@gmail.com' && password === 'user') {
      this.isAdmin = false;
      this.isLoggedIn = true;
    } else {
      this.isAdmin = false;
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  
}
