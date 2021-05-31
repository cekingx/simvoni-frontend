import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { ElectionParticipant } from '@app/_models/election-participant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-participant',
  templateUrl: './show-participant.component.html',
  styleUrls: ['./show-participant.component.scss']
})
export class ShowParticipantComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  participants: ElectionParticipant;

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

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionService: ElectionService,
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.participants = data.participant;
      this.breadcrumbItems.push({
        name: this.participants.electionName,
        route: '/election-authority/election/' + this.participants.electionId
      });
      this.breadcrumbItems.push({
        name: 'Participant',
        route: '/election-authority/election/' + this.participants.electionId + '/participant'
      });
      this.loadingService.hideLoading();
    });
  }

  acceptParticipant(participationId: number) {
    this.loadingService.showLoading();
    this.electionService.acceptParticipation(participationId).subscribe((data: any) => {
      location.reload();
    });
  }

  rejectParticipant(participationId: number) {
    this.loadingService.showLoading();
    this.electionService.rejectParticipation(participationId).subscribe((data: any) => {
      location.reload();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
  }

}
