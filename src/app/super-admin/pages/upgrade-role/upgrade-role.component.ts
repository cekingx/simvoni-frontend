import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';

@Component({
  selector: 'app-upgrade-role',
  templateUrl: './upgrade-role.component.html',
  styleUrls: ['./upgrade-role.component.scss']
})
export class UpgradeRoleComponent implements OnInit {
  breadcrumbItems: BreadcrumbItem[] = [
    {
      name: 'Dashboard',
      route: '/super-admin'
    },
    {
      name: 'Upgrade Role',
      route: '/super-admin/upgrade-role'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
