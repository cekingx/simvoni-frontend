import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { ElectionParticipant } from '@app/_models/election-participant';
import { ElectionWeight } from '@app/_models/weight';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
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
  weights: ElectionWeight;

  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/election-authority'
    },
    {
      name: 'Semua Pemilihan',
      route: '/election-authority/election'
    }
  ];
  roleValue: number;
  mappedWeight;

  @ViewChild('role', {static: false})
  public readonly role: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private electionService: ElectionService,
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.participants = data.participant;
      this.weights = data.weight;
      this.breadcrumbItems.push({
        name: this.participants.electionName,
        route: '/election-authority/election/' + this.participants.electionId
      });
      this.breadcrumbItems.push({
        name: 'Peserta',
        route: '/election-authority/election/' + this.participants.electionId + '/participant'
      });
      this.mappedWeight = this.mapWeight();
      this.loadingService.hideLoading();
    });
  }

  async acceptParticipant(participationId: number) {
    const {value: weightId} = await this.role.fire();
    this.loadingService.showLoading();
    this.electionService.acceptParticipation(participationId, weightId).subscribe((data: any) => {
      location.reload();
    });
  }

  rejectParticipant(participationId: number) {
    this.loadingService.showLoading();
    this.electionService.rejectParticipation(participationId).subscribe((data: any) => {
      location.reload();
    });
  }

  mapWeight() {
    let object = {};
    for (let index = 0; index < this.weights.weight.length; index++) {
      const element = this.weights.weight[index];
      object[element.id] = element.name;
    }
    return object;
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
  }

}
