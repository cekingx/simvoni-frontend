import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';

@Component({
  selector: 'app-followed-election',
  templateUrl: './followed-election.component.html',
  styleUrls: ['./followed-election.component.scss']
})
export class FollowedElectionComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Followed Election',
      route: '/followed-election'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
