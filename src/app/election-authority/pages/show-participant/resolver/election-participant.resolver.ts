import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { ElectionParticipant } from '@app/_models/election-participant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionParticipantResolver implements Resolve<ElectionParticipant> {

  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ElectionParticipant | Observable<ElectionParticipant> | Promise<ElectionParticipant>
  {
    this.loadingService.showLoading();

    return this.electionService.getElectionParticipant(+route.paramMap.get('id'));
  }
}
