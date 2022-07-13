import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class ElectionAuthorityGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    const currentUser = this.authService.currentUserValue;

    if(currentUser.role == Role.EA) {
      return true;
    }

    if(currentUser.role == Role.SUPER_ADMIN) {
      this.router.navigate(['super-admin'])
      return false;
    } else if(currentUser.role == Role.VOTER) {
      this.router.navigate(['']);
      return false;
    } else {
      console.log('election-authority guard error');
      return false;
    }
  }

}
