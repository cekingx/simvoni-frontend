import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KtInitService } from '@app/services/kt-init.service';
import { LoadingService } from '@app/services/loading.service';
import { UserService } from '@app/voter/services/user.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { UpgradeRole } from '@app/_models/upgrade-role';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upgrade-role',
  templateUrl: './upgrade-role.component.html',
  styleUrls: ['./upgrade-role.component.scss']
})
export class UpgradeRoleComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription = new Subscription();
  upgradeRoleStatus: UpgradeRole;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    }
  ];

  @ViewChild('success', {static: false})
  public readonly success: SwalComponent;

  constructor(
    private ktInitService: KtInitService,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.ktInitService.initialize();
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.upgradeRoleStatus = data.upgradeRoleStatus.data
    });
    this.loadingService.hideLoading();
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
    this.subscriptions.add(this.subscription2$);
  }

  upgradeRole() {
    console.log('Upgrading role...');
    this.subscription2$ = this.userService.upgradeRole().subscribe((data: any) => {
      this.success.fire();
    });
  }

  redirectBack() {
    console.log('Redirecting back...');
    this.loadingService.showLoading();
    location.reload();
  }

}
