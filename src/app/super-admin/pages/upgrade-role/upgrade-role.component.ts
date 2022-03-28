import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
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
  ]

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.upgradeRoleList = data.upgradeRoleList;
      this.loadingService.hideLoading();
    });
    console.log(this.upgradeRoleList);
  }

}
