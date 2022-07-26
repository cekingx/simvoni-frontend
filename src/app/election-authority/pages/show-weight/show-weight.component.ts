import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { ElectionWeight, Weight } from '@app/_models/weight';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-weight',
  templateUrl: './show-weight.component.html',
  styleUrls: ['./show-weight.component.scss']
})
export class ShowWeightComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  subscriptions: Subscription = new Subscription();
  weights: ElectionWeight;
  createWeightLink: string;

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

  constructor(private route: ActivatedRoute, private loadingService: LoadingService) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.weights = data.weight;
      this.breadcrumbItems.push({
        name: this.weights.electionName,
        route: '/election-authority/election/' + this.weights.electionId
      });
      this.breadcrumbItems.push({
        name: 'Weight',
        route: '/election-authority/election/' + this.weights.electionId + '/weight'
      })
      this.loadingService.hideLoading();
      this.createWeightLink = `/election-authority/election/${this.weights.electionId}/add-weight`
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
