import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-header-super-admin',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') class = 'header header-fixed ';

  constructor() { }

  ngOnInit() {
  }

}
