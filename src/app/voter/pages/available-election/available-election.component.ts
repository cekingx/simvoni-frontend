import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';

@Component({
  selector: 'app-available-election',
  templateUrl: './available-election.component.html',
  styleUrls: ['./available-election.component.scss']
})
export class AvailableElectionComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    },
    {
      name: 'Available Election',
      route: '/available-election'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
