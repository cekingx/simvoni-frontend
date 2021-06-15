import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionService } from '@app/super-admin/services/election.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ended-election',
  templateUrl: './ended-election.component.html',
  styleUrls: ['./ended-election.component.scss']
})
export class EndedElectionComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  endedElection: Election[];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Ended Election',
      route: '/ended-election'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionService: ElectionService,
    @Inject(LOCALE_ID) private locale: string,
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.endedElection = data.endedElection;
      this.loadingService.hideLoading();
    })
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