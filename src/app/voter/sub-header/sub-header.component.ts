import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BreadcrumbItem } from '@app/_models/breadcrumb-item';

@Component({
  selector: 'sv-voter-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @HostBinding('class') class = 'subheader py-2 py-lg-4 subheader-solid';
  @Input() pageTitle: string;
  @Input() breadcrumbItems: BreadcrumbItem[];

  constructor() { }

  ngOnInit() {
  }

}
