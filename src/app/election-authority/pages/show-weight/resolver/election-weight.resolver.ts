import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LoadingService } from "@app/services/loading.service";
import { ElectionService } from "@app/election-authority/services/election.service";
import { Weight } from "@app/_models/weight";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ElectionWeightResolver implements Resolve<Weight> {
  constructor(
    private electionService: ElectionService,
    private loadingService: LoadingService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Weight | Observable<Weight> | Promise<Weight> {
    this.loadingService.showLoading();

    return this.electionService.getElectionWeight(+route.paramMap.get('id'));
  }
}
