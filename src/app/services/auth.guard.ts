import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  permissions: any
  flag = false;
  constructor(
    private authService: AuthService,
    private router: Router) {
    this.permissions = this.authService.permissions;
    this.permissions = this.permissions.source.value;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    for (let i = 0; i < this.permissions.length; i++) {
      if (this.permissions[i] === "catalog.read") {
        this.flag = true;
        break;
      }
    }
    return this.flag;

  }

  canLoad(route: ActivatedRouteSnapshot): boolean {

    //determine whether you want to load the module
    //return true or false
    this.flag = false;
    for (let i = 0; i < this.permissions.length; i++) {
      if (this.permissions[i] === "user.read") {
        this.flag = true;
        break;
      }
    }
    return this.flag;
  }

}
