import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { UserService } from '@app/super-admin/services/user.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upgrade-role',
  templateUrl: './upgrade-role.component.html',
  styleUrls: ['./upgrade-role.component.scss']
})
export class UpgradeRoleComponent implements OnInit {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  upgradeRoleList: any;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/super-admin'
    },
    {
      name: 'Upgrade Role',
      route: '/super-admin/upgrade-role'
    }
  ];

  @ViewChild('upgradedRole', {static: false})
  public readonly upgradedRole: SwalComponent

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.upgradeRoleList = data.upgradeRoleList;
      this.loadingService.hideLoading();
    });
  }

  acceptUpgradeRole(id: number)
  {
    this.loadingService.showLoading();
    this.userService
      .upgradeRole(id)
      .subscribe(
        result => {
          this.loadingService.hideLoading();
          this.upgradedRole.fire();
        },
        err => {
          this.loadingService.hideLoading();
          console.log(err);
        }
      )
  }

  redirectBack()
  {
    this.loadingService.showLoading();
    location.reload();
  }

}
