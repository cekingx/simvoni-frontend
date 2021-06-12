import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { ElectionDetail } from '@app/_models/election-detail';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followed-election-detail',
  templateUrl: './followed-election-detail.component.html',
  styleUrls: ['./followed-election-detail.component.scss']
})
export class FollowedElectionDetailComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  election: ElectionDetail;
  misiHtml: string;
  pengalamanHtml: string;
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

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    @Inject(LOCALE_ID) private locale: string,
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.election = data.electionDetail;
      this.breadcrumbItems.push({
        name: this.election.name,
        route: '/followed-election/' + this.election.id,
      });
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

  makeHtml(stringArray: string[]) {
    let final;
    let child: string = '';
    stringArray.forEach((data: string, index: number) => {
      let html = `<p>${index+1}. ${data}</p>`;
      child = child + html;
    });
    final = `<div>${child}</div>`;
    return final;
  }

  formattedDate(dateString: string)
  {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMM yyyy', this.locale);
  }
}
