import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  @HostBinding('class') class = 'header-mobile align-items-center header-mobile-fixed ';

  constructor() { }

  ngOnInit() {
  }

}
