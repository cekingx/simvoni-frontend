import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-ea-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @HostBinding('class') class = 'aside aside-left  aside-fixed  d-flex flex-column flex-row-auto';

  constructor() { }

  ngOnInit() {
  }

}
