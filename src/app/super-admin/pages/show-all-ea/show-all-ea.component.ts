import { Component, OnInit } from '@angular/core';
import { ElectionAuthorityService } from '@app/super-admin/services/election-authority.service';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';
import { ElectionAuthority } from '@app/_models/ea';

@Component({
  selector: 'sv-super-admin-show-all-ea',
  templateUrl: './show-all-ea.component.html',
  styleUrls: ['./show-all-ea.component.scss']
})
export class ShowAllEaComponent implements OnInit {
  electionAuthorities: ElectionAuthority[] = [];
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/super-admin'
    },
    {
      name: 'Semua EA',
      route: '/super-admin/election-authority'
    }
  ];

  constructor(
    private electionAuthorityService: ElectionAuthorityService
  ) { }

  ngOnInit() {
    this.electionAuthorityService
      .getAllElectionAuthority()
      .subscribe((data: ElectionAuthority[]) => {
        this.electionAuthorities = data;
      });
  }
}
