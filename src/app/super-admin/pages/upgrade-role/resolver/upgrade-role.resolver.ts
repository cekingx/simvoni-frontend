import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LoadingService } from "@app/services/loading.service";
import { UserService } from "@app/super-admin/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class UpgradeRoleResolver implements Resolve<any> {
  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.showLoading();

    return this.userService.getUpgradeRoleList();
  }
}
