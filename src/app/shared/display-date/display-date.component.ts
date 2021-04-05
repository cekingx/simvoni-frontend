import { formatDate } from '@angular/common';
import { Component, HostBinding, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'sv-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.scss']
})
export class DisplayDateComponent implements OnInit {
  @HostBinding('class') class = 'btn btn-sm btn-light font-weight-bold mr-2';
  today: string;

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.today = formatDate(new Date(), 'dd MMM yyyy', this.locale);
  }

  ngOnInit() {
  }

}
