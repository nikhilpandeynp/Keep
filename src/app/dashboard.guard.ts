import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionService } from "./session.service";

@Injectable()
export class DashboardGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise((resolve, reject) => {
        this.sessionService.isLoggedIn().then((isLoggedIn) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login'])
          }
          resolve(isLoggedIn)
        });
      });
  }
}