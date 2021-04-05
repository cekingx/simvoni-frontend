import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-aside-brand',
  templateUrl: './aside-brand.component.html',
  styleUrls: ['./aside-brand.component.scss']
})
export class AsideBrandComponent implements OnInit {
  @HostBinding('class') class = 'brand flex-column-auto';

  constructor() { }

  ngOnInit() {
  }

}
