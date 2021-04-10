import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthority } from '@app/_models/ea';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sv-super-admin-show-ea',
  templateUrl: './show-ea.component.html',
  styleUrls: ['./show-ea.component.scss']
})
export class ShowEaComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  electionAuthority: ElectionAuthority;
  eaId: number;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.subscription1$ = this.route.data.subscribe((data: any) => {
      this.electionAuthority = data.electionAuthority;
      this.loadingService.hideLoading();
    });
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
  }
}
