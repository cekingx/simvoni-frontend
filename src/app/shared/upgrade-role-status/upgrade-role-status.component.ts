import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-upgrade-role-label',
  templateUrl: './upgrade-role-status.component.html',
  styleUrls: ['./upgrade-role-status.component.scss']
})
export class UpgradeRoleStatusComponent implements OnInit {
  @Input() code: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  get statusState() {
    switch (this.code) {
      case '0':
        return 'danger';
      case '1':
        return 'primary';
      case '2':
        return 'success';

      default:
        return 'danger';
    }
  }

}
