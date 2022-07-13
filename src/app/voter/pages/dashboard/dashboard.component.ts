import { Component, OnInit } from '@angular/core';
import { KtInitService } from '@app/services/kt-init.service';
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

  constructor(private ktInitService: KtInitService) { }

  ngOnInit() {
    this.ktInitService.initialize();
  }

}
