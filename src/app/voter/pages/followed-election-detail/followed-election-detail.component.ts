import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followed-election-detail',
  templateUrl: './followed-election-detail.component.html',
  styleUrls: ['./followed-election-detail.component.scss']
})
export class FollowedElectionDetailComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  election: Election;
  candidates = [1,2,3,4,5];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Followed Election',
      route: '/followed-election'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
  }
}
