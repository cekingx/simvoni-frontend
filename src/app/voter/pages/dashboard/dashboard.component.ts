import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';

@Component({
  selector: 'sv-voter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
