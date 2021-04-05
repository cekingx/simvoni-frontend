import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-sub-header-super-admin',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @HostBinding('class') class = 'subheader py-2 py-lg-4 subheader-solid';
  @Input() pageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
