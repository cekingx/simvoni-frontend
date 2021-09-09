import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { EndedElection } from '@app/_models/ended-election';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ended-election-detail',
  templateUrl: './ended-election-detail.component.html',
  styleUrls: ['./ended-election-detail.component.scss']
})
export class EndedElectionDetailComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  election: EndedElection;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Pemilihan yang Selesai',
      route: '/ended-election'
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.election = data.electionDetail;
      this.breadcrumbItems.push({
        name: this.election.name,
        route: '/ended-election/' + this.election.id,
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

  formattedDate(dateString: string) {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMM yyyy', this.locale);
  }
}
