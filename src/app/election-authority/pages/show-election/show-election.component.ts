import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-election',
  templateUrl: './show-election.component.html',
  styleUrls: ['./show-election.component.scss']
})
export class ShowElectionComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscriptions: Subscription = new Subscription();
  election: Election;
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/election-authority'
    },
    {
      name: 'All Election',
      route: '/election-authority/election'
    }
  ];

  @ViewChild('startedElection', {static: false})
  public readonly startedElection: SwalComponent;

  @ViewChild('endedElection', {static: false})
  public readonly endedElection: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionService: ElectionService,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.election = data.election;
      this.breadcrumbItems.push({
        name: this.election.name,
        route: '/election-authority/election/' + this.election.id
      });
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  startElection() {
    this.subscription2$ = this.electionService
      .startElection(this.election.id)
      .subscribe((data: any) => {
        this.startedElection.fire();
        console.log(data);
      });
  }

  endElection() {
    this.subscription3$ = this.electionService
      .endElection(this.election.id)
      .subscribe((data: any) => {
        this.endedElection.fire();
        console.log(data);
      })
  }

  redirectBack() {
    this.loadingService.showLoading();
    location.reload();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
    this.subscriptions.add(this.subscription2$);
  }

  formatDate(dateString: string) {
    const date = new Date(dateString);
    return formatDate(date, 'dd MMM yyyy', this.locale);
  }
}
