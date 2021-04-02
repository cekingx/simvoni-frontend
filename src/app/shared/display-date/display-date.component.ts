import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'sv-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.scss']
})
export class DisplayDateComponent implements OnInit {
  @HostBinding('class') class = 'btn btn-sm btn-light font-weight-bold mr-2';

  constructor() { }

  ngOnInit() {
  }

}
