 import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // التحقق من وجود الـ token في local storage وصحته
      const token = localStorage.getItem('token');
      if (token !== null) {
        return true; // ا
      } else {
        this.router.navigate(['/auth']); // 
        return false; // 
      }
    }
}
