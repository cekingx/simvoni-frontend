import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionAuthority } from '@app/_models/ea';

@Component({
  selector: 'sv-super-admin-show-ea',
  templateUrl: './show-ea.component.html',
  styleUrls: ['./show-ea.component.scss']
})
export class ShowEaComponent implements OnInit {
  electionAuthority: ElectionAuthority;
  eaId: number;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.electionAuthority = data.electionAuthority;
      this.loadingService.hideLoading();
    });
  }
}
