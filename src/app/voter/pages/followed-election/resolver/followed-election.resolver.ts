import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionService } from '@app/voter/services/election.service';
import { FollowedElection } from '@app/_models/followed-electon';

@Injectable({
  providedIn: 'root'
})
export class FollowedElectionResolver implements Resolve<FollowedElection[]> {

  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.showLoading();

    return this.electionService.getFollowedElection();
  }
}
