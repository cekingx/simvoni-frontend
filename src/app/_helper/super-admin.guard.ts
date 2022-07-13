import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  )
  { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const currentUser = this.authService.currentUserValue;

    if(currentUser.role == Role.SUPER_ADMIN) {
      return true;
    }

    if(currentUser.role == Role.EA) {
      this.router.navigate(['election-authority'])
      return false;
    } else if(currentUser.role == Role.VOTER) {
      this.router.navigate(['']);
      return false;
    } else {
      console.log('super-admin guard error');
      return false;
    }
  }
}
