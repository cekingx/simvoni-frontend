import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionService } from '@app/voter/services/election.service';

@Injectable({
  providedIn: 'root'
})
export class EndedElectionDetailResolver implements Resolve<any> {

  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.showLoading();

    return this.electionService.getEndedElectionDetail(+route.paramMap.get('id'));
  }
}
