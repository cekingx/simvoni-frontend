import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { ElectionAuthority } from '@app/_models/ea';
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

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionAuthorityService: ElectionAuthorityService
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.electionAuthority = data.electionAuthority;
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
      .subscribe((data: any) => {
        this.electionAuthority.walletAddress = data.address;
        this.loadingService.hideLoading();
      });
  }
}
