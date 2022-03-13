import { formatDate, NgLocaleLocalization } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KtInitService } from '@app/services/kt-init.service';
import { LoadingService } from '@app/services/loading.service';
import { ElectionService } from '@app/voter/services/election.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

declare let KTApp: any;
declare let KTAppSettings: any;
declare let KTUtil: any;
declare let KTLayoutAside: any;
declare let $: any;
@Component({
  selector: 'app-available-election',
  templateUrl: './available-election.component.html',
  styleUrls: ['./available-election.component.scss']
})
export class AvailableElectionComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  availableElection: Election[];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Pemilihan yang Tersedia',
      route: '/available-election'
    }
  ];

  @ViewChild('joinedElection', {static: false})
  public readonly joinedElection: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionService: ElectionService,
    @Inject(LOCALE_ID) private locale: string,
    private ktInitService: KtInitService
  ) { }

  ngOnInit() {
    this.ktInitService.initialize();
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.availableElection = data.availableElection;
      this.loadingService.hideLoading();
    })
  }

  joinElection(electionId: number) {
    this.loadingService.showLoading();
    this.electionService.joinElection(electionId).subscribe((data: any) => {
      this.loadingService.hideLoading();
      this.joinedElection.fire();
    });
  }

  redirectBack()
  {
    location.reload();
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
