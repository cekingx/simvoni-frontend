import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { ElectionAuthority } from '@app/_models/ea';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-super-admin-show-ea',
  templateUrl: './show-ea.component.html',
  styleUrls: ['./show-ea.component.scss']
})
export class ShowEaComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscriptions: Subscription = new Subscription();
  electionAuthority: ElectionAuthority;
  eaId: number;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/super-admin'
    },
    {
      name: 'Semua EA',
      route: '/super-admin/election-authority'
    }
  ];
  error = '';

  @ViewChild('createdWalletAddress', { static: false })
  public readonly createdWalletAddress: SwalComponent;

  @ViewChild('errorSwal', { static: false })
  public readonly errorSwal: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionAuthorityService: ElectionAuthorityService
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.electionAuthority = data.electionAuthority;
      this.breadcrumbItems.push({
        name: this.electionAuthority.name,
        route: '/super-admin/election-authority/' + this.electionAuthority.id
      })
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
    this.subscriptions.add(this.subscription2$);
  }

  setWalletAddress() {
    this.loadingService.showLoading();

    this.subscription2$ = this
      .electionAuthorityService
      .setWalletAddress(this.electionAuthority.id)
      .subscribe(
        (result: any) => {
          this.electionAuthority.walletAddress = result.address;
          this.loadingService.hideLoading();
          this.createdWalletAddress.fire();
        },
        err => {
          this.error = err.error.message;
          this.loadingService.hideLoading();
          this.errorSwal.fire();
        }
      );
  }
}
