import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '@app/election-authority/services/election.service';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit, OnDestroy {
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
  misi: Array<string> = [
    'menjaga jarak',
    'mencuci tangan'
  ]
  pengalaman: Array<string> = [
    'makan',
    'mandi',
    'tidur'
  ]

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.election = data.election;
      this.breadcrumbItems.push(
        {
          name: this.election.name,
          route: '/election-authority/election/' + this.election.id
        },
        {
          name: 'Add Candidate',
          route: '/election-authority/election/' + this.election.id + '/add-candidate'
        }
      );
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.pushSubscription();

    this.subscriptions.unsubscribe();
  }

  addCandidate() {}

  redirectBack() {}

  addMisi() {
    this.misi.push('misi');
  }

  addPengalaman() {
    this.pengalaman.push('pengalaman')
  }

  removeMisi(index: number) {
    this.misi.splice(index, 1);
  }

  removePengalaman(index: number) {
    this.pengalaman.splice(index, 1);
  }

  pushSubscription() {
    this.subscriptions.add(this.subscription1$);
    this.subscriptions.add(this.subscription2$);
  }
}
