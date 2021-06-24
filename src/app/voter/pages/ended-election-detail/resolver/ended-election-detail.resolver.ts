import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class EndedElectionDetailResolver implements Resolve<any> {

  constructor(
    private loadingService: LoadingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.showLoading();

    return route.paramMap.get('id');
  }
}
