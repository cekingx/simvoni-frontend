import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';

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

    if(currentUser.role == 'election_authority') {
      return true;
    }
    
    if(currentUser.role == 'super_admin') {
      this.router.navigate(['super-admin'])
      return false;
    } else if(currentUser.role == 'voter') {
      this.router.navigate(['voter']);
      return false;
    } else {
      console.log('election-authority guard error');
      return false;
    }
  }
  
}
