import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { Election } from '@app/_models/election';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectionResolver implements Resolve<Election> {

  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Election | Observable<Election> | Promise<Election> {
    this.loadingService.showLoading();

    return this.electionService.getElectionById(+route.paramMap.get('id'));
  }
}
