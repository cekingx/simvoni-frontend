import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '@app/services/loading.service';
import { ElectionService } from '@app/super-admin/services/election.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { Election } from '@app/_models/election';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-show-rtd-election',
  templateUrl: './show-rtd-election.component.html',
  styleUrls: ['./show-rtd-election.component.scss']
})
export class ShowRtdElectionComponent implements OnInit {
  rtdElections: Election[] = [];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/super-admin'
    },
    {
      name: 'Ready to Deploy',
      route: '/super-admin/election/ready-to-deploy'
    }
  ];

  @ViewChild('deployedElection', {static: false})
  public readonly deployedElection: SwalComponent

  constructor(
    private electionService: ElectionService,
    private loading: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.electionService
      .getReadyToDeployElection()
      .subscribe((data: Election[]) => {
        this.rtdElections = data;
      });
  }

  deployElection(id: number)
  {
    this.loading.showLoading();
    this.electionService
      .deployElection(id)
      .subscribe(
        result => {
          this.loading.hideLoading();
          this.deployedElection.fire();
        },
        err => {
          this.loading.hideLoading();
          console.log(err);
        }
      )
  }


  redirectBack()
  {
    location.reload();
  }
}
