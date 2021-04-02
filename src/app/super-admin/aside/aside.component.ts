import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-aside-super-admin',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @HostBinding('class') class = 'aside-menu-wrapper flex-column-fluid';

  constructor() { }

  ngOnInit() {
  }

}
