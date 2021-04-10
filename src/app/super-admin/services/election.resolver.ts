import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthority } from '@app/_models/ea';
import { Observable } from 'rxjs';
import { ElectionAuthorityService } from './election-authority.service';

@Injectable({
  providedIn: 'root'
})
export class ElectionResolver implements Resolve<ElectionAuthority> {

  constructor(
    private electionAuthorityService: ElectionAuthorityService,
    private loadingService: LoadingService
  )
  { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ElectionAuthority | Observable<ElectionAuthority> | Promise<ElectionAuthority>
  {
    this.loadingService.showLoading();

    return this
      .electionAuthorityService
      .getElectionAuthorityById(+route.paramMap.get('id'));
  }
}
