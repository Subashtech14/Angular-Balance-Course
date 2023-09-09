import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;

  constructor() {}
  Login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      return this.isLoggedIn = true;
    }
  return this.isLoggedIn;
  }
}
