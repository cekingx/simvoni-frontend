import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KtInitService } from '@app/services/kt-init.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { FollowedElection } from '@app/_models/followed-election';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followed-election',
  templateUrl: './followed-election.component.html',
  styleUrls: ['./followed-election.component.scss']
})
export class FollowedElectionComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  followedElection: FollowedElection[];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Pemilihan yang Diikuti',
      route: '/followed-election'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    @Inject(LOCALE_ID) private locale: string,
    private ktInitService: KtInitService
  ) { }

  ngOnInit() {
    this.ktInitService.initialize();
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.followedElection = data.followedElection;
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
  }

  formattedDate(dateString: string)
  {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMM yyyy', this.locale);
  }
}
