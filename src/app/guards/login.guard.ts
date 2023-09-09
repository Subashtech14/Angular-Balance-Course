import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.loginService.isLoggedIn;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.loginService.isLoggedIn
      ? true
      : this.router.navigate(['/login']);
  }
}
