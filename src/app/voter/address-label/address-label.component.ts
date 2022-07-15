import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-address-label',
  templateUrl: './address-label.component.html',
  styleUrls: ['./address-label.component.scss']
})
export class AddressLabelComponent implements OnInit {
  @Input() from: string;
  @Input() to: string;

  constructor() { }

  ngOnInit() {
  }

}
