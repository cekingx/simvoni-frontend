import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input() state: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  get stateClass()
  {
    return `label-light-${this.state}`;
  }

}
